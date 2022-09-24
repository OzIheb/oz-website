import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <div className="bg--Hero">
      <div className="hero--Header">
        <div className="logo">
          <a href="#">OZ</a>
        </div>
        <ul className="header-list">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
