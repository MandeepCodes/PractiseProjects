import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';

function App() {
  const [mode, setMode] = useState('dark');
  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#1f1f1f';
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = '#ffffff';
    }
  }
  return (
    <>
      <Navbar title="Text Utilities" mode={mode} toggleMode={toggleMode}/>
      <Alert alert="This is a alert"/>
      <div className="container my-3">
        <TextForm heading = "Enter the text to parse" mode = {mode}/>
      </div>
    </>
  );
}

export default App;
