import React, { useEffect } from "react";
import "./project.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Project = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
  }, []);

  const projects = [
    {
      title: "Library Management System",
      description:
        "A Library Management System (LMS) is a software application designed to manage and automate various tasks involved in running a library efficiently. It helps in organizing, cataloging, and tracking library resources for both users and administrators.",
      technologies: ["C", "CSS", "HTML", "JavaScript"],
    },
    {
      title: "Real-Time Chat Application",
      description:
        "A dynamic platform for instant communication, supporting private and group chats. It incorporates features like real-time messaging, user status updates, and push notifications for seamless interaction.",
      technologies: ["Node.js", "Socket.IO", "React", "MongoDB"],
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive personal portfolio showcasing projects, skills, and experiences. It highlights creative design and development expertise with engaging visuals and smooth interactions.",
      technologies: ["React", "CSS", "JavaScript"],
    },
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            data-aos="fade-up"
            data-aos-delay={index * 100} // Staggered animation
          >
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="technology-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
