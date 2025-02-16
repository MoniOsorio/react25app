import React from "react";
import Weather from "./Weather.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>El clima</h1>
        <Weather />
        <footer>
          This project was created by{" "}
          <a href="https://osorio.no/" target="_blank">
            Monica Osorio{" "}
          </a>{" "}
          and is{" "}
          <a href="https://github.com/MoniOsorio/react25app" target="_blank">
            open-sourced in Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
