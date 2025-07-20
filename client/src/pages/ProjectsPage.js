import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectCard from "../components/ProjectCard";
import Loading from "../components/Loading.js";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    axios.get(`${API_BASE_URL}/api/contact`)  
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
    <div className="p-4">
      {loading ? (
        <Loading />
      ) : projects.length === 0 ? (
        <p className="text-3xl font-bold text-center mt-8">No projects found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map(project => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProjectsPage;
