import React from "react";

import "./home.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img2 from "./mine.jpg";

function Home() {

  return (
    <div className="hero">
      <div className="hero-text">
        <h3 id="hello">Hello 👋, I'm</h3>
        <h1>Sujith Raja R</h1>
        <p>Passionate in webdevelopment</p>
        <h2 className="role"></h2>
      </div>

      <div className="hero-image">
        <img 
        src={img2}
          alt="Developer illustration" width={500}
        />
      </div>
    </div>
  );
}

export default Home;
