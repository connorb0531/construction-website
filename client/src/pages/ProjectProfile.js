// pages/ProjectProfile.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

function ProjectProfile() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/projects/${id}`)
      .then((response) => {
        setProject(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching project:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loading />;

  if (!project) {
    return <p className="text-center mt-10 text-xl">Project not found.</p>;
  }

  const images = project.images || [];
  const mainImage = images[0] || "/img/default_project.png";
  const secondImage = images[1];
  const remainingImages = images.slice(2);

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-12">
      {/* Top Row: Title and Main Image */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-center justify-center h-full min-h-[200px]">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-800 text-center leading-tight">
            {project.title}
          </h1>
        </div>
        <img
          src={mainImage}
          alt="Main"
          className="rounded-lg w-full object-cover max-h-[400px]"
        />
      </div>

      {/* Second Row: Second image + Description */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {secondImage && (
          <img
            src={secondImage}
            alt="Second"
            className="rounded-lg w-full object-cover max-h-[300px]"
          />
        )}
        <p className="text-lg text-gray-700">{project.description || "No description available."}</p>
      </div>

      {/* Remaining Images */}
      {remainingImages.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">More Photos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {remainingImages.map((url, index) => (
              <img
                key={index}
                src={url}
                alt="Additional"
                className="rounded-md object-cover w-full max-h-[250px]"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectProfile;
