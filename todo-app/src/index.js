import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NoteApp from "./App";

var destination = document.querySelector("#container");

ReactDOM.render(
  <div>
    <NoteApp/>
  </div>,   
  destination
);