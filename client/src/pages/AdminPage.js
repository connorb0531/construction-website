import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL;

if (!API_BASE_URL) {
  console.error('REACT_APP_API_URL environment variable is not set');
}

function AdminPage() {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({ title: '', description: '', imageUrl: '' });

  // Load all projects
  useEffect(() => {
    axios.get(`${API_BASE_URL}/api/projects`)
      .then(response => setProjects(response.data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`${API_BASE_URL}/api/projects/${id}`)
      .then(() => setProjects(projects.filter(p => p._id !== id)))
      .catch(error => console.error('Error deleting project:', error));
  };

  const handleCreate = () => {
    axios.post(`${API_BASE_URL}/api/projects`, newProject)
      .then(response => setProjects([...projects, response.data]))
      .catch(error => console.error('Error creating project:', error));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>

      {/* Create new project */}
      <div className="space-y-2 mb-6">
        <input
          type="text"
          placeholder="Title"
          value={newProject.title}
          onChange={e => setNewProject({ ...newProject, title: e.target.value })}
          className="border p-2 w-full"
        />
        <input
          type="text"
          placeholder="Description"
          value={newProject.description}
          onChange={e => setNewProject({ ...newProject, description: e.target.value })}
          className="border p-2 w-full"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newProject.imageUrl}
          onChange={e => setNewProject({ ...newProject, imageUrl: e.target.value })}
          className="border p-2 w-full"
        />
        <button onClick={handleCreate} className="bg-green-600 text-white px-4 py-2 rounded">Add Project</button>
      </div>

      {/* List and delete projects */}
      <div className="space-y-4">
        {projects.map(project => (
          <div key={project._id} className="p-4 border rounded flex justify-between items-center">
            <div>
              <h2 className="font-bold">{project.title}</h2>
              <p>{project.description}</p>
            </div>
            <button onClick={() => handleDelete(project._id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminPage;
