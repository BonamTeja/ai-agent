import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import React from 'react';

import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import MainPage from './Components/MainPage';
import UserPage from './Components/UserPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/mainPage" element={<MainPage />} />
        <Route path="/user/:userId" element={<UserPage />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
