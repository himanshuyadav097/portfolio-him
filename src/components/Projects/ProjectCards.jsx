import React from "react";
import "./projects.css";

const ProjectCards = ({ title, description, link, stack }) => {
  return (
    <div className="project-card">
      <h2>{title}</h2>
      <p className="projectcard-link">{description}</p>
      {link && (
        <p className="projectcard-link">
          <a href={link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </p>
      )}
      <p className="projectcard-link">
        <strong>Stack:</strong> {stack}
      </p>
    </div>
  );
};

export default ProjectCards;
