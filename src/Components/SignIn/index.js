import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./index.css"
import Cookies from 'js-cookie'
export const loginContext = createContext();
 
const SignIn = () => {
  const navigate = useNavigate();
  const initialState = { Id: "", email: "", password: "" };
  const [loginData, setLoginData] = useState(initialState);
  const [data, setData] = useState([]);
  const [loginErrors, setLoginErrors] = useState({});
  const [dataWithID,setDataWithID] = useState({});
  const [loginStatus, setLoginStatus] = useState("");
 
  useEffect(() => {
    axios
      .get("https://gallant-69c58-default-rtdb.firebaseio.com/users.json")
      .then((response) => {
        const fetchedData = response.data || {};
        setDataWithID(fetchedData);
        let data = Object.values(fetchedData);
        setData(data);
      });
  }, []);

  useEffect(() => {
    // Check if the user is already logged in
    const isLoggedIn = localStorage.getItem("userInfo");
    // const isLoggedIn = Cookies.get("userInfo");
    // const isLoggedIn = sessionStorage.getItem("userInfo");
    console.log(isLoggedIn)

    if (isLoggedIn) {
      navigate("/mainPage");
      console.log("Working");
    }else{
      navigate("/login")
    }
  }, [navigate]);

 
  const handleData = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };

  const validateForm = () => {
    let isValid = true;
    let errors = {};
    if (loginData.email === "") {
      errors.email = "Enter email to login";
      isValid = false;
    }
    if (loginData.password === "") {
      errors.password = "Enter password to login";
      isValid = false;
    }
    setLoginErrors(errors);
    return isValid;
  };
 
  const checkData = (event) => {
    event.preventDefault();
    if (validateForm()) {
      const itemExist = data.findIndex(
        (item) => item.email === loginData.email

      );
      //console.log(data[itemExist])
      if (itemExist > -1) {
        if (
          data[itemExist].email === loginData.email &&
          data[itemExist].password === loginData.password
        ) { 

          // const getUser = dataWithID.filter((each) => each.email === loginData.email);

          // console.log(getUser);
          const getUser = Object.entries(dataWithID)
            .filter(([id, user]) => user.email === loginData.email)
            .map(([id, user]) => ({ id, ...user }));

           console.log(getUser)
           const id = getUser[0].id;
          // Cookies.set("userInfo",id);
          // sessionStorage.setItem("userInfo",id)
        // dispatch(editForm(data[itemExist]))
        localStorage.setItem("userInfo",id);
          setLoginData(initialState);
          navigate("/mainPage");
          // console.log(flag, "flag");
        } else {
          setLoginStatus("Password is incorrect, please enter the correct password");
        }
      } else {
        setLoginStatus("User does not exist, please register");
      }
    }
    //console.log(flag,'flag')
  };
  const hideErrors = (event) => {
    setLoginErrors({
      ...loginErrors,
      [event.target.name]: "",
    });
  };
 
  const checkErrors = (event) => {
    if (event.target.value === "") {
      setLoginErrors({
        ...loginErrors,
        [event.target.name]: "Enter " + event.target.name,
      });
    }
  };
 
  
//   console.log(myId,'outside')
 
  return (
    <React.Fragment>
      <main>
        <h1>Gallant</h1>
      <div className="main-container">
       <div class="login-container">
         <form class="login-form" onSubmit={checkData}>
           <div class="input-container">
             <input
               type="email"
               class={`login-input login_page_username ${loginErrors?.email && 'border border-danger'}`}
               placeholder="Username or Email"
               onChange={handleData}
               onFocus={hideErrors}
               onBlur={checkErrors}
               value={loginData.email}
               name="email"
             />
             {loginErrors.email ? (
               <small class="login-error">{loginErrors.email}</small>
             ) : null}
           </div>
           <div class="input-container">
             <input
               type="password"
               class={`login-input login_page_username ${loginErrors?.password && 'border border-danger'}`}
               placeholder="Password"
               onChange={handleData}
               onFocus={hideErrors}
               onBlur={checkErrors}
               value={loginData.password}
               name="password"
             />
             {loginErrors.password ? (
               <small class="login-error">{loginErrors.password}</small>
             ) : null}
           </div>
           {loginStatus && <p className="login-status">{loginStatus}</p>}
           <input type="submit" class="login-submit" value="Login" />
           
         </form>
       
       </div>
      </div>
      </main>
 
 
    </React.Fragment>
  );
};
 
export default SignIn;