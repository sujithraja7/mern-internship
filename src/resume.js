import React from "react";
import img from "./resume.png";
import "./resume.css"

function Resume() {
  return (
    <div>
      <h1 id="resume">Resume</h1>
      <p>
        Download my resume{" "}
        <a href={"/sujithrajar_resume2.docx"} download="sujithrajar_resume2.docx">
          here
        </a>.
      </p>
      <img src={img} alt="Resume" width={800} />
    </div>
  );
}

export default Resume;
