import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
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
  const [isRecording, setIsRecording] = useState(false);



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

  const handleBeforeUnload = (event) => {
    try {
      const navigationTiming = performance.getEntriesByType("navigation")[0];
      if (
        navigationTiming.type !== "reload" &&
        navigationTiming.type !== "back_forward" &&
        navigationTiming.type !== "navigate"
      ) {
        // If the page is being unloaded (i.e., the browser window is being closed), clear localStorage
        localStorage.clear();
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  window.addEventListener("beforeunload", handleBeforeUnload);

  const chatRef = ref(database, `text${userId}`);
  set(chatRef, { transcript })
    .then(() => {
      console.log("Added Successfully to Firebase");
    })
    .catch((error) => {
      console.error("Error adding data to Firebase: ", error);
    });

  const filteredCommands =
    commandss?.filter((command) =>
      command.command.toLowerCase().includes(searchInput.toLowerCase())
    ) || commandss;

  const handleSignOut = () => {
    const user = localStorage.getItem("userInfo");
    if (user) {
      localStorage.removeItem("userInfo");
      navigate("/login");
    }
  };

  const formatTextToHTML = (text) => {
    let sentences = text.split(/[.\n]+/).filter(Boolean);
    let formattedHTML = `<ul>${sentences.map(sentence => `<li>${sentence.trim()}</li>`).join("")}</ul>`;
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

  const handleSendButton = () => {
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
    saveTranscript(trans);
    console.log(trans);
  };

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

  return (
    <div className="mainPageBackgroundContainer">
      <div className="mainPleftSectionContainer">
        <h1 className="CommandBoxHeading">Questions</h1>
        <div class="search-container">
          <input
            type="search"
            placeholder="Search"
            class="search-input"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button type="button" class="search-button">
            <BsSearch className="search-icon" />
          </button>
        </div>
        <div className="CommandsContainer" style={{ overflowY: "scroll" }}>
          {filteredCommands?.map((item) => (
            <li
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
          <h1 className="appTitle">Gallant</h1>
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
            <div class="search-container-mobile">
              <input
                type="search"
                placeholder="Search"
                className="search-input"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </div>
            <ul className="questions">
            {filteredCommands?.map((item) => (
              <li
                style={{ cursor: "pointer" }}
                onClick={() => handleCommand(item)}
              >
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
           
            <button
              id="sendButton"
              onClick={handleSendButton}
              className="stopButton button"
            >
              Send
            </button>
            {buttonsPopUp && (
              <div className="popup" id="popup">
                Chat Sent !
              </div>
            )}
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
