// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
// import About from "./components/About";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      Type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#06283D";
      showAlert("Dark mode has been enable", "success");
      document.title = "TextUtils - Dark Mode";
      // document.body.style.backgroundColor = '#042743';
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enable", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* <Navbar title = "TextUtils" aboutText = "About TextUtils"/> */}
        {/* <Navbar />  //for default props */}
        <div className="container my-3">
          {/* <Routes> */}
            
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route
              path="/"
              element={ */}
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze"
                  mode={mode}
                />
                {/* <a target="_blank" href="/about">
              <About />
            </a> */}
              {/* } */}
            {/* /> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
