import React from 'react'
import WelcomeScreen from '../Screens/WelcomeScreen'
import Login1 from '../Screens/Login1'

import Inbox from '../Screens/Inbox1'
import Error1 from '../Screens/Error1'
import {BrowserRouter as  Router,Routes, Route } from 'react-router-dom'
const Navigation = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Login1/>} /> 
            <Route path="/welcome" element={<WelcomeScreen/>} />
            <Route path="/toinbox" element={<Inbox/>} />
            <Route path="*" element={<Error1/>} />
            
        </Routes>
    </Router>   
  );
}
export default Navigation