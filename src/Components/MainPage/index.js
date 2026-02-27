import { useNavigate } from "react-router-dom";
import { useState, useEffect, useMemo, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import axios from "axios";
import "./index.css";
import { ref, set } from "firebase/database";
import { database } from "../../Firebase";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import commandss from "../../data";

const MainPage = () => {
  const userId = localStorage.getItem("userInfo");
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const [genPopUp, setGenPopUp] = useState(false);
  const [userLink, setUserLink] = useState("");
  const [linkCopied, setLinkCopied] = useState(false);
  const [buttonsPopUp, setButtonsPopUp] = useState(false);
  const [skills, setSkills] = useState(["react"]);
  const [text, setText] = useState("");

  const eventSourceRef = useRef(null);
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  useEffect(() => {
    if (!userId) {
      navigate("/login");
      return;
    }

    axios
      .get("https://gallant-69c58-default-rtdb.firebaseio.com/users.json")
      .then((response) => {
        const fetchedData = response.data;
        console.log(fetchedData);
      });
  }, [navigate, userId]);

  useEffect(() => {
    if (!userId) return;
    const chatRef = ref(database, `text${userId}`);
    set(chatRef, { transcript }).catch(console.error);
  }, [transcript, userId]);

  const fil =
    commandss
      ?.filter((comm) => skills.includes(comm?.category))
      .map((comm) => comm.value) || [];

  const filArray = fil.flatMap((item) => item);

  const filteredCommands = useMemo(() => {
    const term = searchInput.toLowerCase();
    return filArray.filter((command) =>
      command?.command?.toLowerCase().includes(term)
    );
  }, [filArray, searchInput]);

  const handleSignOut = () => {
    localStorage.removeItem("userInfo");
    navigate("/login");
  };

  const handleResetButton = () => {
    const chatRef = ref(database, `data${userId}`);
    set(chatRef, { chatInputData: "" }).then(() => {
      setText("");
      resetTranscript();
    });
  };

  const handleStartListening = () => {
    setText("");
    resetTranscript();
    SpeechRecognition.startListening({ continuous: true, language: "en-US" });
  };

  return (
    <div className="mainPageBackgroundContainer">
      <div className="mainPleftSectionContainer">
        <h1 className="CommandBoxHeading">Questions</h1>
        <div className="CommandsContainer">
          {filteredCommands?.map((item, idx) => (
            <li key={item?.command || idx}>
              {item.command}
            </li>
          ))}
        </div>
      </div>

      <div className="mainPrightSectionContainer">
        <div className="mainPrightSectionTopBar">
          <h1 className="appTitle">AI Agent</h1>
          <button onClick={handleSignOut} className="signoutButton">
            Sign Out
          </button>
        </div>

        <textarea
          value={text || transcript}
          placeholder="Type or Speak..."
          onChange={(e) => setText(e.target.value)}
        />

        <div>
          {listening ? (
            <button onClick={SpeechRecognition.stopListening}>Stop</button>
          ) : (
            <button onClick={handleStartListening}>Listen</button>
          )}

          <button onClick={handleResetButton}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;