import React from "react";
import './about.css';

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">🌟 About Me 🌟</h1>
      <p className="about-description">
        Hi there! I'm <span className="highlight">Sujithraja R</span>, a Full Stack Developer who loves turning ideas into digital magic. From web development to cybersecurity, I thrive on crafting innovative solutions and exploring the latest technologies. 🌈
      </p>

      <div className="about-details">
        <h2 className="details-title">✨ Areas of Interest</h2>
        <ul className="details-list">
          <li>🌐 Software Engineering</li>
          <li>💻 Web Development</li>
          <li>🎨 UI/UX Design</li>
          <li>🔒 CyberSecurity</li>
        </ul>

        <h2 className="details-title">🎯 Hobbies</h2>
        <ul className="details-list">
          <li>🎮 Playing Games</li>
          <li>🎬 Watching Movies</li>
          <li>🚀 Exploring Tech</li>
          <li>📚 Reading Books</li>
          <li>✈️ Traveling</li>
        </ul>
      </div>

      <div className="additional-section">
        <h2 className="additional-title">🚀 Future Goals</h2>
        <p className="additional-content">
          My mission is to master cloud technologies and AI/ML to create innovative, real-world solutions. 🌟 Let's build a brighter, tech-driven future!
        </p>
      </div>
    </div>
  );
}

export default About;
