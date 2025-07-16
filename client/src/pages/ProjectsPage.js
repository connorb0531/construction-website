import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectCard from "../components/ProjectCard";

function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    axios.get("/api/projects")  
      .then(response => {
        setProjects(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching projects:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading projects...</p>   // Show while fetching
      ) : projects.length === 0 ? (
        <p>No projects found.</p>    // Show only if loading complete and empty
      ) : (
        projects.map(project => (
          <ProjectCard key={project._id} project={project} />
        ))
      )}
    </div>
  );
}

export default ProjectsPage;
