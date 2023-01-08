import React from "react";
import ReactDOM from "react-dom";
import Classes from viewClasses;
var Classes = require('../../models/class')


import "./styles.css";

function App() {
  const itemList = ["Item1", "Item2", "Item3", "Item4", "Item5"];

  // Generate JSX code for Display each item
  const renderList = itemList.map((item, index) => 
                               <div key={index}>{item}</div>
                             );
  return (
    <div className="app">
      <div>The List contains:</div>
      {renderList}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);