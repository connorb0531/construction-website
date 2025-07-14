// client/src/components/ProjectCard.js
import React from "react";

function ProjectCard({ project }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem 0" }}>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      {project.imageUrl && <img src={project.imageUrl} alt={project.title} style={{ width: "300px" }} />}
    </div>
  );
}

export default ProjectCard;
