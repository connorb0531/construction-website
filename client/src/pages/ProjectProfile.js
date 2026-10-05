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
  const [selectedImage, setSelectedImage] = useState(null);

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

  useEffect(() => {
    if (!selectedImage) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedImage(null);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

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
          alt={`${project.title} main view`}
          className="rounded-lg w-full object-cover max-h-[400px] cursor-zoom-in"
          role="button"
          tabIndex={0}
          onClick={() => setSelectedImage(mainImage)}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              setSelectedImage(mainImage);
            }
          }}
        />
      </div>

      {/* Second Row: Second image + Description */}
      <div className="md:after:content-[''] md:after:block md:after:clear-both">
        {secondImage && (
          <img
            src={secondImage}
            alt={`${project.title} additional view`}
            className="rounded-lg w-full object-cover max-h-[300px]
                 md:w-1/2 md:float-left md:mr-6 md:mb-2 cursor-zoom-in"
            role="button"
            tabIndex={0}
            onClick={() => setSelectedImage(secondImage)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setSelectedImage(secondImage);
              }
            }}
          />
        )}

        <p className="text-lg text-gray-700">
          {project.description || "No description available."}
        </p>
      </div>

      {/* Clear the float before the rest of the page content */}
      <div className="clear-both" />

      {/* Remaining Images */}
      {remainingImages.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">More Photos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {remainingImages.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`${project.title} view ${index + 3}`}
                className="rounded-md object-cover w-full max-h-[250px] cursor-zoom-in"
                role="button"
                tabIndex={0}
                onClick={() => setSelectedImage(url)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setSelectedImage(url);
                  }
                }}
              />
            ))}
          </div>
        </div>
      )}

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-90 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Expanded project image"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-black bg-opacity-60 text-3xl leading-none text-white hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close expanded image"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>
          <img
            src={selectedImage}
            alt={`${project.title} expanded view`}
            className="max-h-[92vh] max-w-[96vw] rounded-lg object-contain shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export default ProjectProfile;
