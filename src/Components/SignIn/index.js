import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./index.css";

export const loginContext = createContext();

const SignIn = () => {
  const navigate = useNavigate();

  const initialState = { email: "", password: "" };

  const [loginData, setLoginData] = useState(initialState);
  const [data, setData] = useState([]);              // ARRAY of users
  const [dataWithID, setDataWithID] = useState({});  // OBJECT with IDs
  const [loginErrors, setLoginErrors] = useState({});
  const [loginStatus, setLoginStatus] = useState("");

  // 🔹 Fetch users from Firebase
  useEffect(() => {
    axios
      .get("https://ai-agent-edb5b-default-rtdb.firebaseio.com/users.json")
      .then((response) => {
        const fetchedData = response.data || {};

        setDataWithID(fetchedData);

        // ✅ Convert object → array
        const usersArray = Object.values(fetchedData);
        console.log("Fetched Users Array:",usersArray, JSON.parse(JSON.stringify(fetchedData)));
        setData(usersArray);
      })
      .catch((err) => console.error(err));
  }, []);

  // 🔹 Redirect if already logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("userInfo");
    if (isLoggedIn) {
      navigate("/mainPage");
    }
  }, [navigate]);

  // 🔹 Input handler
  const handleData = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  // 🔹 Validation
  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!loginData.email) {
      errors.email = "Enter email to login";
      isValid = false;
    }
    if (!loginData.password) {
      errors.password = "Enter password to login";
      isValid = false;
    }

    setLoginErrors(errors);
    return isValid;
  };

  console.log("Login Data:", loginData, data);

  // 🔹 Login check
  const checkData = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    // ✅ Find user by email
    const user = data.find(
      (item) => item.email === loginData.email
    );

    if (!user) {
      setLoginStatus("User does not exist, please register");
      return;
    }

    if (user.password !== loginData.password) {
      setLoginStatus("Password is incorrect, please enter the correct password");
      return;
    }

    // ✅ Get user ID from original object
    const userEntry = Object.entries(dataWithID).find(
      ([_, u]) => u.email === loginData.email
    );

    const id = userEntry?.[0];

    localStorage.setItem("userInfo", id);
    setLoginData(initialState);
    navigate("/mainPage");
  };

  const hideErrors = (e) => {
    setLoginErrors({
      ...loginErrors,
      [e.target.name]: "",
    });
  };

  const checkErrors = (e) => {
    if (e.target.value === "") {
      setLoginErrors({
        ...loginErrors,
        [e.target.name]: "Enter " + e.target.name,
      });
    }
  };

  return (
    <React.Fragment>
      <main>
        <h1>Gallant</h1>

        <div className="main-container">
          <div className="login-container">
            <form className="login-form" onSubmit={checkData}>

              <div className="input-container">
                <input
                  type="email"
                  className={`login-input login_page_username ${
                    loginErrors.email ? "border border-danger" : ""
                  }`}
                  placeholder="Username or Email"
                  name="email"
                  value={loginData.email}
                  onChange={handleData}
                  onFocus={hideErrors}
                  onBlur={checkErrors}
                />
                {loginErrors.email && (
                  <small className="login-error">{loginErrors.email}</small>
                )}
              </div>

              <div className="input-container">
                <input
                  type="password"
                  className={`login-input login_page_username ${
                    loginErrors.password ? "border border-danger" : ""
                  }`}
                  placeholder="Password"
                  name="password"
                  value={loginData.password}
                  onChange={handleData}
                  onFocus={hideErrors}
                  onBlur={checkErrors}
                />
                {loginErrors.password && (
                  <small className="login-error">{loginErrors.password}</small>
                )}
              </div>

              {loginStatus && (
                <p className="login-status">{loginStatus}</p>
              )}

              <input type="submit" className="login-submit" value="Login" />
            </form>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default SignIn;