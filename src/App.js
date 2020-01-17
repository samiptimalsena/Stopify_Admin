import React from "react";
import "./App.css";
import UploaderImage from "./component/imageUploader";
import Database from './firebase/database.js'

function App() {
  return (
    <div className="App">
     <UploaderImage/>
    </div>
  );
}

export default App;