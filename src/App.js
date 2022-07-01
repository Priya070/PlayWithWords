import './App.css';
import  Navbar  from "./components/Navbar";
import Form from "./components/Form";
// import About from './components/About';
import { useState } from 'react'
import Alert from './components/Alert';
import React from "react";

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [Mode, setDarkMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const toggleMode = () => {
    if (Mode === 'light') {
      setDarkMode('dark')
      document.body.style.backgroundColor = "grey"
      showAlert(": Dark Mode enabled",'success')
    }
    else {
      setDarkMode("light")
      document.body.style.backgroundColor = "white"
      showAlert(": Light Mode enabled",'success')
    }
  }
  return (
    <>
      {/* <Router> */}
      <Navbar title="PlayWithWords" mode = {Mode} toggleMode ={toggleMode}/>
      {/* this form is not giving good look so we used bootstrap container to give
      it a better look
      <Form />  */}
      <Alert alert={alert} />
      
      {/* <div className="container my-3"> */}
        {/* <Routes>
            <Route exact path="/" element={<Form mode={Mode} showAlert={showAlert} toggleMode={toggleMode} text="Enter text here" />}> </Route>
            <Route exact path='/about' element={<About/>}/>
        </Routes> */}
      {/* </div> */}
      <Form mode={Mode} showAlert={showAlert} toggleMode={toggleMode} text="Enter text here" />
      {/* </Router> */}
    </>
  );
}

export default App;
