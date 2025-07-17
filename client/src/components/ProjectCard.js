// client/src/components/ProjectCard.js
import React from "react";

function ProjectCard({ project }) {
  return (
    <div className="w-full max-w-sm aspect-[4/3] overflow-hidden rounded shadow-sm relative mb-4 transform transition-transform duration-300 hover:scale-105">
      <img
        src={project.imageUrl || '/img/default_project.png'}
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 bg-black bg-opacity-60 px-2 py-1 rounded-br">
        <h2 className="text-white text-sm font-semibold">{project.title}</h2>
      </div>
    </div>
  );
}

export default ProjectCard;

