import "./index.css";
import createDOMPurify from "dompurify";
import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../../Firebase";
import { useParams } from "react-router-dom";

const DOMPurify =
  typeof window !== "undefined" ? createDOMPurify(window) : null;

const UserPage = () => {
  const { userId } = useParams();
  const [dataFromDatabase, setDataFromDatabase] = useState("");
  const [dataFromDatabaseMic, setDataFromDatabaseMic] = useState("");

  useEffect(() => {
    if (!userId) return;

    const dataRef = ref(database, `data${userId}`);
    const unsubData = onValue(dataRef, (snapshot) => {
      const value = snapshot.val();
      if (value) setDataFromDatabase(value.chatInputData);
    });

    const textRef = ref(database, `text${userId}`);
    const unsubText = onValue(textRef, (snapshot) => {
      const value = snapshot.val();
      if (value) setDataFromDatabaseMic(value.transcript);
    });

    return () => {
      unsubData();
      unsubText();
    };
  }, [userId]);

  return (
    <div className="mainBackgroundContainer">
      <div className="rightSectionContainer">
        {dataFromDatabaseMic && <p>{dataFromDatabaseMic}</p>}
        {dataFromDatabase && (
          <p>
            <span
              dangerouslySetInnerHTML={{
                __html: DOMPurify?.sanitize(dataFromDatabase),
              }}
            />
          </p>
        )}
      </div>
    </div>
  );
};

export default UserPage;