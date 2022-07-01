import { useState } from "react"
import React from 'react'
//useState is hook we have many hooks in react

export default function Form(props) {
    const [text, setText] = useState('');
    const handleUpperCase = () => {
        // console.log("UpperCase button clicked");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase",'success')
    }
    const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert('converted to lowercase','success')
    }
    const handleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value);
    }
    const handleReplaceNumber = () => {
        let newText = text.replace("this", "helloo");
        setText(newText)
        props.showAlert('your one "this" is converted', 'success')
    }
    
    return (
        <>
            <div className="container">
            <h1>{props.text}</h1>
          <div className="mb-2">
              {/* <label for="exampleFormControlTextarea1" className="form-label">{props.text}</label> */}
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.Mode === "dark"? "grey":"white"}} id="area1" rows="5"></textarea>
            </div> 
            <button className="btn btn-primary mb-2" onClick={handleUpperCase}>convert to uppercase</button>
            <button className="btn btn-primary mx-1 mb-2" onClick={handleLowerCase}>convert to Lowercase</button>
            <button className="btn btn-primary mx-1 mb-2" onClick={handleReplaceNumber}>replace 'this' word to 'helloo'</button>
        </div>
            
            <div className="container my-3">
                <h1>Your text info</h1>
                <p>{text.split(' ').length} words and {text.length} characters(count space as well)</p>
                <p>{ 0.008 * text.split("").length} minutes to read this whole text</p>
            </div>
            <div className="container my-3">
                <h1>Perview</h1>
                {/* <textarea className="form-control" value={text} id="exampleFormControlTextarea1" rows="5"></textarea> */}
                <p>{text}</p>
            </div>

        </>
  )
}
