import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { Routes, BrowserRouter as Router, Route } from "react-router";
import React, {useState} from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }

  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#1f1f1f';
      showAlert("Dark mode has been enabled","success");
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = '#ffffff';
      showAlert("Light mode has been enabled","success");
    }
  }

  return (
    <>
    <Router>
      <Navbar title="Text Utilities" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About/>}>
          </Route>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading = "Enter the text to parse" mode = {mode}/>}>
          </Route>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
