import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!", "success");
  };
  const handleChar = () => {
    var length = 100;
    var newText = text.substring(0, length);
    setText(newText);
    props.showAlert("Text length is upto 100 character long!", "success");
  };
  const handleNewLine = () => {
    var newText = text.replace(/(\r\n|\n|\r)/gm, " ");
    // var newText = text.replace(/\r?\n|\r/);
    setText(newText);
  };
  const handleFirstUp = () => {
    // var newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    // setText(newText);
    // props.showAlert("First letter capitalized!", "success");

    var newText = text.toLowerCase().split(" ");
    for (var i = 0; i < newText.length; i++) {
      // You do not need to check if i is larger than splitStr length, as your for does that for you
      // Assign it back to the array
      newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].substring(1);
    }
    // Directly return the joined string
    var newText1 = newText.join(" ");
    setText(newText1);
    props.showAlert("First letter capitalized!", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Space Removed!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  // Enter text here"
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Enter text here"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-secondary mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-success mx-1" onClick={handleFirstUp}>
          First Letter Up
        </button>

        <button className="btn btn-warning mx-1" onClick={handleExtraSpaces}>
          Remove extra spaces
        </button>
        <button className="btn btn-danger mx-1" onClick={handleChar}>
          Resize to 100 Character
        </button>
        <button className="btn btn-primary mx-1" onClick={handleNewLine}>
          RemoveNewLine
        </button>
        <button className="btn btn-info mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-light mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>Your text summary</h1>
        <p>
          { text !== "" ? text.split(" ").length : 0} words and {text.length} characters
        </p>
        <p>{ text !== "" ? 0.008 * text.split(" ").length : 0} minutes read</p>
        
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}
