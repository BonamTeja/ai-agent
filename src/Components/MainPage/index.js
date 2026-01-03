import { useNavigate } from "react-router-dom";
import { useState, useEffect, useMemo, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import axios from "axios";
import "./index.css";
import { ref, set } from "firebase/database";
import { database } from "../../Firebase";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import commandss from "../../data";

const MainPage = () => {
  const userId = localStorage.getItem("userInfo");
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const [userName, setuserName] = useState("");
  const [genPopUp, setGenPopUp] = useState(false);
  const [userLink, setUserLink] = useState("");
  const [linkCopied, setLinkCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [buttonsPopUp, setButtonsPopUp] = useState(false);
  const [skills, setSkills] = useState(["react"]);
  const [isRecording, setIsRecording] = useState(false);
  const eventSourceRef = useRef(null);



  // const { listening, browserSupportsContinuousListening } =
  //   useSpeechRecognition();
  // const { transcript, resetTranscript, browserSupportsSpeechRecognition } =
  //   useSpeechRecognition({ commandss });

    const [text, setText] = useState("");
    const { transcript, listening, resetTranscript } = useSpeechRecognition();

  useEffect(() => {
    const userId = localStorage.getItem("userInfo");
    //   const userId = Cookies.get("userInfo")
    //   const userId = sessionStorage.getItem("userInfo");
    if (!userId) {
      navigate("/login");
    }
    if (userId) {
      axios
        .get("https://gallant-69c58-default-rtdb.firebaseio.com/users.json")
        .then((response) => {
          const fetchedData = response.data;
          const userExisitingData = fetchedData[userId];
          console.log(fetchedData);

          const name = userExisitingData?.firstname;
          setuserName(name);
        });
    }
  }, [navigate]);

  // Add beforeunload listener with cleanup to avoid leaks
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      try {
        const navigationTiming = performance.getEntriesByType('navigation')[0];
        if (
          navigationTiming.type !== 'reload' &&
          navigationTiming.type !== 'back_forward' &&
          navigationTiming.type !== 'navigate'
        ) {
          // If the page is being unloaded (i.e., the browser window is being closed), clear localStorage
          localStorage.clear();
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  // write transcript to DB only when it changes
  useEffect(() => {
    if (!userId) return;
    const chatRef = ref(database, `text${userId}`);
    set(chatRef, { transcript })
      .then(() => {
        // transcript saved
      })
      .catch((error) => {
        console.error('Error adding data to Firebase: ', error);
      });
  }, [transcript, userId]);

  // const fil = commandss?.filter((comm) => {
  //   if(skills.includes(comm?.category)) {
  //     return comm?.value
  //   } else {
  //     return null
  //   }
  // });
  const fil = commandss?.filter((comm) => skills.includes(comm?.category)).map((comm) => comm.value) || [];
  const filArray = fil.flatMap((item) => item);

  // Memoize filtered commands to avoid recalculating on every render
  const filteredCommands = useMemo(() => {
    if (!filArray) return [];
    const term = searchInput.toLowerCase();
    return filArray.filter((command) =>
      command?.command?.toLowerCase().includes(term)
    );
  }, [filArray, searchInput]);

  const handleSignOut = () => {
    const user = localStorage.getItem("userInfo");
    if (user) {
      localStorage.removeItem("userInfo");
      navigate("/login");
    }
  };

  const formatTextToHTML = (text) => {
    let sentences = text.split(/[.\n]+/).filter(Boolean);
    let formattedHTML = `<div>${sentences.map(sentence => `<p>${sentence.trim()}</p>`).join("")}</div>`;
    return formattedHTML;
  };

  // const handleSendButton =() => {
  //   handleResetMicData()
  //   const chatInputData = text || transcript ;
  //   setButtonsPopUp(true);
  //   if (userId && chatInputData.trim() !== "") {
  //     const chatRef = ref(database, `data${userId}`);
  //     set(chatRef, { chatInputData })
  //       .then(() => {})
  //       .catch((error) => {
  //         console.error("Error adding data to Firebase: ", error);
  //       });
  //   }
  //   SpeechRecognition.stopListening()
  //   setTimeout(() => {
  //     setButtonsPopUp(false);
  //   }, 600);
  // };

  const handleSendButton = (text) => {
    setText(text);
    handleResetMicData();
    let chatInputData = text || transcript;
  
    // Function to check if string contains HTML tags
    const containsHTML = (str) => /<\/?[a-z][\s\S]*>/i.test(str);
  
    // If 'text' is plain, convert it into structured HTML
    if (!containsHTML(text) && text) {
      chatInputData = formatTextToHTML(text);
    }
  
    setButtonsPopUp(true);
  
    if (userId && chatInputData.trim() !== "") {
      const chatRef = ref(database, `data${userId}`);
      set(chatRef, { chatInputData })
        .then(() => {})
        .catch((error) => {
          console.error("Error adding data to Firebase: ", error);
        });
    }
  
    SpeechRecognition.stopListening();
    setTimeout(() => {
      setButtonsPopUp(false);
    }, 600);
  };

  // Debounce writing typed `text` to Firebase to avoid flooding DB with every keystroke
  const writeTimer = useRef(null);
  useEffect(() => {
    if (!userId) return;
    // If text is empty, write empty chatInputData quickly
    if (writeTimer.current) clearTimeout(writeTimer.current);
    writeTimer.current = setTimeout(() => {
      const chatInputData = (text || "").trim();
      const chatRef = ref(database, `data${userId}`);
      set(chatRef, { chatInputData }).catch((error) => {
        console.error("Error adding data to Firebase: ", error);
      });
    }, 450);
    return () => {
      if (writeTimer.current) clearTimeout(writeTimer.current);
    };
  }, [text, userId]);

  const handleResetButton = () => {
    const chatRef = ref(database, `data${userId}`);
    set(chatRef, { chatInputData: "" })
      .then(() => {
        setText("");
        resetTranscript();
      })
      .catch((error) => {
        console.error("Error adding data to Firebase: ", error);
      });
  };

  const handleResetMicData = () => {
    const chatRef = ref(database, `text${userId}`);
    set(chatRef, { transcript:"" })
    .then(() => {
      resetTranscript();
    })
    .catch((error) => {
      console.error("Error adding data to Firebase: ", error);
    });
  }

  const handleResetTypeData = () => {
    const chatRef = ref(database, `data${userId}`);
    set(chatRef, { chatInputData: "" })
      .then(() => {
        setText("");
      })
      .catch((error) => {
        console.error("Error adding data to Firebase: ", error);
      });
  }





  const handleGenerateLink = () => {
    if (userId) {
      const url = window.location.href;
      console.log(url);
      const containsHash = url.includes("#");
      const urlMain = url.split("#")[0];
      const domain = window.location.hostname;
      let userLink;
      if (containsHash) {
        userLink =
          domain === "localhost"
            ? `http://localhost:3000/mainPage#/user/${userId}`
            : `${urlMain}#/user/${userId}`;
      } else {
        userLink =
          domain === "localhost"
            ? `http://localhost:3000/user/${userId}`
            : `https://${domain}/user/${userId}`;
      }
      setUserLink(userLink);
      setGenPopUp(true);
    }
  };

  const handleClosePopup = () => {
    setGenPopUp(false);
    setLinkCopied(false);
    setIsOpen(false);
  };

  const handleCommand = (item) => {
    setText(item.text);
    handleResetMicData();
    let chatInputData = item.text || transcript;
  
    // Function to check if string contains HTML tags
    const containsHTML = (str) => /<\/?[a-z][\s\S]*>/i.test(str);
  
    // If 'text' is plain, convert it into structured HTML
    if (!containsHTML(item.text) && item.text) {
      chatInputData = formatTextToHTML(item.text);
    }
  
    setButtonsPopUp(true);
  
    if (userId && chatInputData.trim() !== "") {
      const chatRef = ref(database, `data${userId}`);
      set(chatRef, { chatInputData })
        .then(() => {})
        .catch((error) => {
          console.error("Error adding data to Firebase: ", error);
        });
    }
  
    SpeechRecognition.stopListening();
    setTimeout(() => {
      setButtonsPopUp(false);
    }, 600);
  };


  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(userLink)
      .then(() => {
        setLinkCopied(true);
      })
      .catch((error) => {
        console.error("Error copying link to clipboard:", error);
      });
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const saveTranscript = (trans) => {
    // Save transcript to realtime DB once
    if (!userId) return;
    const chatRef = ref(database, `text${userId}`);
    set(chatRef, { transcript: trans })
      .then(() => {})
      .catch((error) => console.error(error));
    console.log(trans);
  };

  // ChatGPT / OpenAI integration: POST to Firebase Function
  // ChatGPT integration: streaming approach using EventSource
  const sendToChatGPT = async () => {
    const message = (text || transcript || '').trim();
    if (!message) return;
    setButtonsPopUp(true);

    const streamUrl = process.env.REACT_APP_CHAT_STREAM_URL || process.env.REACT_APP_CHAT_FUNCTION_URL?.replace('/chat', '/chatStream');
    if (!streamUrl) {
      alert('Chat stream URL not configured (REACT_APP_CHAT_STREAM_URL)');
      setButtonsPopUp(false);
      return;
    }

    const url = `${streamUrl}?userId=${encodeURIComponent(userId)}&message=${encodeURIComponent(message)}`;

    let eventSource;
    try {
      eventSource = new EventSource(url);
      eventSourceRef.current = eventSource;
    } catch (err) {
      console.error('EventSource failed to open', err);
      alert('Streaming not supported or failed to connect');
      setButtonsPopUp(false);
      return;
    }

    let acc = '';

    eventSource.onmessage = (e) => {
      try {
        const data = JSON.parse(e.data);
        if (data.delta) {
          acc += data.delta;
          setText(acc);
        }
        if (data.done) {
          try { eventSourceRef.current?.close(); } catch(e){}
          eventSourceRef.current = null;
          setButtonsPopUp(false);
        }
        if (data.error) {
          console.error('Stream error:', data.error);
        }
      } catch (err) {
        console.error('Error parsing stream message', err);
      }
    };

    eventSource.onerror = (err) => {
      console.error('EventSource error', err);
      try { eventSourceRef.current?.close(); } catch(e){}
      eventSourceRef.current = null;
      setButtonsPopUp(false);
    };
  };

  // cleanup on unmount
  useEffect(() => {
    return () => {
      if (eventSourceRef.current) {
        try { eventSourceRef.current.close(); } catch (e) {}
        eventSourceRef.current = null;
      }
    };
  }, []);

  const handleStartButton = () => {
    SpeechRecognition.startListening({
      continuous: true,
      language: "en-IN",
    });
    setIsRecording(true);
  };

  const handleStopButton = () => {
    SpeechRecognition.stopListening();
    setIsRecording(false);
  };

  const handleStartListening = () => {
    setText("")
    resetTranscript(); // Clear previous transcript
    handleResetTypeData()
    SpeechRecognition.startListening({ continuous: true, language: "en-US" });
  };

  const handleChange = (event) => {
    const {name, checked} = event.target;
    setSkills((prevSkills) => {
    return checked
      ? [...prevSkills, name]
      : prevSkills.filter((skill) => skill !== name);
  });
  }
  console.log(skills, fil, 'name1234');


  return (
    <div className="mainPageBackgroundContainer">
      <div className="mainPleftSectionContainer">
        <h1 className="CommandBoxHeading">Questions</h1>
        <div className="filterDiv">
          <span className="checkboxItem">
            <input style={{cursor: "pointer"}} id="id-react" type="checkbox" name="react" onChange={handleChange} value="React" checked={skills.includes("react") } />
            <label style={{cursor: "pointer"}} htmlFor="id-react">React</label>
          </span>
          <span className="checkboxItem">
            <input style={{cursor: "pointer"}} id="id-node" type="checkbox" name="node" onChange={handleChange} value="Node" checked={skills.includes("node") } />
            <label style={{cursor: "pointer"}} htmlFor="id-node">Node</label>
          </span>
        </div>
        <div className="search-container">
          <input
            type="search"
            placeholder="Search"
            className="search-input"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button type="button" className="search-button">
            <BsSearch className="search-icon" />
          </button>
        </div>
        <div className="CommandsContainer" style={{ overflowY: "scroll" }}>
          {filteredCommands?.map((item, idx) => (
            <li
              key={item?.command || idx}
              style={{ cursor: "pointer" }}
              onClick={() => handleCommand(item)}
            >
              {item.command}
            </li>
          ))}
        </div> 
      </div>
      <div className="mainPrightSectionContainer">
        <div className="mainPrightSectionTopBar">
          <h1 className="appTitle"></h1>
          <div className="mainPrightSectionTopBarInfo">
            {/* <MdPerson className="logIcon" /> */}
            {/* <h3 className="loginPName">{`${userName
              ?.slice(0, 1)
              .toUpperCase()}${userName?.slice(1)}`}</h3> */}
            <button onClick={handleSignOut} className="signoutButton">
              Sign Out
            </button>
          </div>
        </div>

        <div className="rightSectionBottomContainer">
          <div
            className="MobileCommandsContainer"
            style={{ height: "150px", display: "flex", flexDirection: "column" }}
          >
            <div className="search-container-mobile">
              <input
                type="search"
                placeholder="Search"
                className="search-input"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </div>
            <ul className="questions">
            {filteredCommands?.map((item, idx) => (
              <li key={item?.command || idx} style={{ cursor: "pointer" }} onClick={() => handleCommand(item)}>
                {item.command}
              </li>
            ))}
            </ul>
          </div>
          {/* <textarea
            placeholder="Mic"
            type="text"
            className="mainPtopInputContainer"
            value={transcript}
          /> */}

          <div className="btnTextContainer">
            {isRecording && (
              <div className="recordingIndicator">
                Recording<span className="blink">...</span>
              </div>
            )}
            {/* <div className="mainPbuttonsContainer">
              <button
                className="startButton button"
                onClick={handleStartButton}
              >
                Start
              </button>
              <button className="stopButton button" onClick={handleStopButton}>
                Stop
              </button>
              <button className="resetButton button" onClick={resetTranscript}>
                Reset
              </button>
            </div> */}
          </div>
          <textarea
            value={text || transcript}
            placeholder="Type or Speak..."
            type="text"
            className="mainPbottomInputContainer"
            onChange={(e) => setText(e.target.value)}
          />
          <div className="mainPbuttonsContainer">
            {listening ?
            <button className="startButton button" onClick={SpeechRecognition.stopListening}>Stop Listening</button>
           
            :
            <button
            onClick={handleStartListening}
            className="startButton button"
            >
             Listen
            </button>
            
            }
           
            {/* <button
              id="sendButton"
              onClick={handleSendButton}
              className="stopButton button"
            >
              Send
            </button> */}
            {buttonsPopUp && (
              <div className="popup" id="popup">
                Chat Sent !
              </div>
            )}
            <button onClick={sendToChatGPT} className="stopButton button">
              ChatGPT
            </button>
            <button onClick={handleResetButton} className="resetButton button">
              Reset
            </button>
          </div>
        </div>
        <div className="generateLink">
          <button className="generate button" onClick={handleGenerateLink}>
            Generate Link
          </button>
        </div>
        {genPopUp && (
          <div>
            <div className="overlay" onClick={handleClosePopup}></div>
            <div className="generateLinkPop">
              <h2>Use Below Link :-</h2>
              <div className="linkContainer">
                <p className="userLink">
                  {userLink}
                  <span
                    className="copyIcon"
                    onClick={copyToClipboard}
                    title="Click here to copy"
                  >
                    📋
                  </span>
                </p>
              </div>
              {linkCopied && <p>Link copied!</p>}
              <button onClick={handleClosePopup}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainPage;
