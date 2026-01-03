const functions = require('firebase-functions');
const admin = require('firebase-admin');
const fetch = require('node-fetch');

admin.initializeApp();

// Simple POST /chat function that proxies user message to OpenAI and writes response to Realtime DB
exports.chat = functions.https.onRequest(async (req, res) => {
  // CORS preflight
  if (req.method === 'OPTIONS') {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'POST');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.status(204).send('');
    return;
  }

  res.set('Access-Control-Allow-Origin', '*');

  if (req.method !== 'POST') {
    return res.status(405).send({ error: 'Method not allowed' });
  }

  const { userId, message } = req.body || {};
  if (!message || typeof message !== 'string') {
    return res.status(400).send({ error: 'Missing message' });
  }
  if (!userId) {
    return res.status(400).send({ error: 'Missing userId' });
  }

  // Basic length limit to protect cost
  if (message.length > 8000) {
    return res.status(400).send({ error: 'Message too long' });
  }

  const apiKey = functions.config().openai && functions.config().openai.key;
  const model = (functions.config().openai && functions.config().openai.model) || 'gpt-3.5-turbo';
  if (!apiKey) {
    console.error('OpenAI key not configured');
    return res.status(500).send({ error: 'OpenAI key not configured' });
  }

  try {
    const payload = {
      model,
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: message }
      ],
      max_tokens: 800
    };

    const r = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(payload)
    });

    const data = await r.json();
    const assistant = data?.choices?.[0]?.message?.content || 'No response';

    // Save assistant response to Realtime Database under data{userId}
    await admin.database().ref(`data${userId}`).set({ chatInputData: assistant });

    return res.json({ assistant });
  } catch (err) {
    console.error('OpenAI request failed', err);
    return res.status(500).send({ error: 'OpenAI request failed' });
  }
});

// SSE streaming endpoint: GET /chatStream?userId=...&message=...
exports.chatStream = functions.https.onRequest(async (req, res) => {
  // CORS preflight
  if (req.method === 'OPTIONS') {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.status(204).send('');
    return;
  }

  res.set('Access-Control-Allow-Origin', '*');

  if (req.method !== 'GET') {
    return res.status(405).send({ error: 'Method not allowed' });
  }

  const userId = req.query.userId;
  const message = req.query.message;

  if (!message || typeof message !== 'string') {
    return res.status(400).send({ error: 'Missing message' });
  }
  if (!userId) {
    return res.status(400).send({ error: 'Missing userId' });
  }

  const apiKey = functions.config().openai && functions.config().openai.key;
  const model = (functions.config().openai && functions.config().openai.model) || 'gpt-3.5-turbo';
  if (!apiKey) {
    console.error('OpenAI key not configured');
    return res.status(500).send({ error: 'OpenAI key not configured' });
  }

  // Start SSE
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  let assistantText = '';

  try {
    const payload = {
      model,
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: message }
      ],
      max_tokens: 800,
      stream: true
    };

    const r = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(payload)
    });

    if (!r.body) {
      res.write(`data: ${JSON.stringify({ error: 'No stream from OpenAI' })}\n\n`);
      res.end();
      return;
    }

    // Node.js stream handling
    r.body.on('data', (chunk) => {
      const lines = chunk.toString('utf8').split('\n');
      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed) continue;
        if (trimmed === 'data: [DONE]') {
          // finished
          // send done event
          res.write(`data: ${JSON.stringify({ done: true })}\n\n`);
          // Save final assistantText to DB
          admin.database().ref(`data${userId}`).set({ chatInputData: assistantText }).catch(err => console.error(err));
          res.end();
          return;
        }
        if (trimmed.startsWith('data: ')) {
          const jsonStr = trimmed.replace(/^data: /, '');
          try {
            const parsed = JSON.parse(jsonStr);
            const delta = parsed?.choices?.[0]?.delta?.content || '';
            if (delta) {
              assistantText += delta;
              // send partial delta to client
              res.write(`data: ${JSON.stringify({ delta })}\n\n`);
            }
          } catch (err) {
            // ignore JSON parse errors for chunks
          }
        }
      }
    });

    r.body.on('end', () => {
      // Ensure finalization if [DONE] was not explicitly sent
      admin.database().ref(`data${userId}`).set({ chatInputData: assistantText }).catch(err => console.error(err));
      res.write(`data: ${JSON.stringify({ done: true })}\n\n`);
      res.end();
    });

    r.body.on('error', (err) => {
      console.error('Stream error', err);
      res.write(`data: ${JSON.stringify({ error: 'Stream error' })}\n\n`);
      res.end();
    });

  } catch (err) {
    console.error('OpenAI stream failed', err);
    res.write(`data: ${JSON.stringify({ error: 'OpenAI stream failed' })}\n\n`);
    res.end();
  }
});
