import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Btn clicked");
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowClick = () => {
        console.log("Btn clicked");
        let newText = text.toLocaleLowerCase();
        setText(newText)
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text,setText] = useState('Enter text here');

  return (
    <>
    <div className='container' style={{color : props.mode === 'dark'?'white':'black'}}>
        <h2 >{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'dark'?'#1f1f1f':'white', color : props.mode === 'dark'?'white':'black'}} id="myBox" rows="7"></textarea>
            <button className="btn btn-primary my-2 mx-3" onClick={handleUpClick}>Convert To Uppercase</button>
            <button className="btn btn-primary my-2" onClick={handleLowClick}>Convert To Lowercase</button>
        </div>
    </div>
    <div className="container my-3" style={{color : props.mode === 'dark'?'white':'black'}}>
        <h4>Your text summary is here</h4>
        <p>Characters - {text.length} 
            <br/>Words - {text.split(" ").length}
            <br/>Time to read - {0.008 * text.split(" ").length} mins
        </p>
    </div>
    </>
  )
}
