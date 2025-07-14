// client/src/pages/ProjectsPage.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectCard from "../components/ProjectCard";

const PORT = process.env.PORT;

function ProjectsPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:${5000}/api/projects`)
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  return (
    <div>
      {projects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        projects.map(project => (
          <ProjectCard key={project._id} project={project} />
        ))
      )}
    </div>
  );
}

export default ProjectsPage;
