import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./App.css";
import Home from "./Home";
import About from "./about";
import Contact from "./contact";
import Resume from "./resume";
import Project from "./project";

function App() {
  return (
    <Router>
      <div className="container">
        <header className="navbar">
          <h1 className="logo">Sujith Raja R</h1>
          <nav>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Me</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/project">Project</Link></li>
              <li><Link to="/resume">Resume</Link></li>
           
            </ul>
            {/* Social Media Icons */}
            <ul className="social-icons">
              <li><a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} /></a></li>
              <li><a href=""><FontAwesomeIcon icon={faTwitter} /></a></li>
              <li><a href="https://www.linkedin.com"><FontAwesomeIcon icon={faLinkedin} /></a></li>
              <li><a href="https://www.github.com"><FontAwesomeIcon icon={faGithub} /></a></li>
            </ul>
          </nav>
        </header>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
          <Route path="/resume" element={<Resume />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
