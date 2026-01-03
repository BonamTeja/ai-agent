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
