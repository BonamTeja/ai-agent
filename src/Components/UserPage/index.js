
import "./index.css"
import createDOMPurify from 'dompurify';

import { MdPerson } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";
import { ref, onValue } from "firebase/database";
import { database } from '../../Firebase';
import { useParams } from 'react-router-dom';
const DOMPurify = typeof window !== 'undefined' ? createDOMPurify(window) : null;
const UserPage = () => {
  // const userId = localStorage.getItem('userInfo')
  const { userId } = useParams();
  // const [chatValue,setChatValue] = useState("");

  // useEffect(()=>{
  //     axios.get(`https://speak-n-chat-default-rtdb.firebaseio.com/register/${userId}.json`)
  //     .then((response) =>{
  //         const fetchedData = response.data;
  //         setChatValue(fetchedData.data);
  //     })

  // },[chatValue])

  const [dataFromDatabase, setDataFromDatabase] = useState('');
  const [dataFromDatabaseMic, setDataFromDatabaseMic] = useState('')
  const [userDataInfo, setuserDataInfo] = useState({});

  useEffect(() => {
    const dataRef = ref(database, `data${userId}`);
    const unsubData = onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setDataFromDatabase(data.chatInputData);
      }
    });

    const textRef = ref(database, `text${userId}`);
    const unsubText = onValue(textRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setDataFromDatabaseMic(data.transcript);
      }
    });

    const dataInfo = ref(database, `userDataInfo${userId}`);
    const unsubInfo = onValue(dataInfo, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setuserDataInfo(data.userFormData);
      }
    });

    // Cleanup listeners when component unmounts to avoid duplicate listeners
    return () => {
      try {
        if (typeof unsubData === 'function') unsubData();
        if (typeof unsubText === 'function') unsubText();
        if (typeof unsubInfo === 'function') unsubInfo();
      } catch (err) {
        // fallback: silently ignore
      }
    };

  }, [userId]);


  return (
    <div className="mainBackgroundContainer">
      <div className='rightSectionContainer' style={{ marginTop: "2px" }}>

        {/* <div className="mobileUserInfoContainer">
                 <div className="mobileeachuserInfocont">
                        <p className="mobileuserPageUserInfo">Company Name :&nbsp;</p>
                        <span> <strong> {userDataInfo.companyName}</strong></span>
                </div>
                <div className="mobileeachuserInfocont">
                <p className="mobileuserPageUserInfo">Payrole Name :&nbsp; </p>
                <span><strong>{userDataInfo.payroleName}</strong></span>
                </div>
                
                <div className="mobileeachuserInfocont">
                <p className="mobileuserPageUserInfo">To : &nbsp;</p>
                <span><strong>{userDataInfo.to}</strong></span>
                </div>
                <div className="mobileeachuserInfocont">
                <p className="mobileuserPageUserInfo">From : &nbsp;</p>
                <span><strong>{userDataInfo.from}</strong></span>
                </div>
                <div className="mobileeachuserInfocont">
                <p className="mobileuserPageUserInfo">Experience's : &nbsp;</p>
                <span><strong>{userDataInfo.experiences}</strong></span>
                </div>
                <div className="mobileeachuserInfocont">
                <p className="mobileuserPageUserInfo">Experience's revalent : &nbsp;</p>
                <span><strong>{userDataInfo.experiencesRelevant}</strong></span>
                </div>
                <div className="mobileeachuserInfocont">
                <p className="mobileuserPageUserInfo">Current CTC : &nbsp;</p>
                <span><strong>{userDataInfo.currentCTC}</strong></span>
                </div>
                <div className="mobileeachuserInfocont">
                <p className="mobileuserPageUserInfo">Expected CTC : &nbsp;</p>
                <span><strong>{userDataInfo.expectedCTC}</strong></span>
                </div>

                
               
              </div> */}



        {/* <div style={{ marginTop:'0px'}}>  */}
        {/* <h2>Data from Mic:</h2> 
    <div style={{border:"1px solid red", padding:'10px', minHeight:'150px',fontSize:"18px"}}> {dataFromDatabaseMic}</div>
      <h2>Data from Chat</h2>
    <div style={{border:"1px solid red", padding:'10px', minHeight:'350px', fontSize:"18px"}} dangerouslySetInnerHTML={{ __html: dataFromDatabase }}/>
     */}

        {/* <div style={{ border: "1px solid red", padding: "10px",fontSize: "18px",}}> */}
        {dataFromDatabaseMic && <p>{dataFromDatabaseMic}</p>}
        {dataFromDatabase && <p><span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(dataFromDatabase) }} /></p>}
        {/* </div> */}


        {/* </div> */}

        {/* <textarea placeholder="Mic" type="text" className='topInputContainer' />
                  
                  <textarea value={dataFromDatabase} placeholder="Chat" type="text" className='bottomInputContainer' /> */}


      </div>


    </div>
  )
}

export default UserPage;