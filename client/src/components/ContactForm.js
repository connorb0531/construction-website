// client/src/components/ContactForm.js

import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import LoadingIndicator from "./Loading";

const API_BASE_URL = process.env.REACT_APP_API_URL;

if (!API_BASE_URL) {
  console.error('REACT_APP_API_URL environment variable is not set');
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); // ← NEW STATE
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setError("");
      setLoading(true); // ← Start loading

      try {
        await axios.post(`${API_BASE_URL}/api/contact`, formData);
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } catch (err) {
        console.error("Error submitting contact form:", err);
        setError("Something went wrong. Please try again.");
      } finally {
        setLoading(false); // ← Stop loading
      }
    },
    [formData]
  );

  useEffect(() => {
    let timer;
    if (submitted) {
      timer = setTimeout(() => setSubmitted(false), 5000);
    }
    return () => clearTimeout(timer);
  }, [submitted]);

  return (
    <div className="max-w-lg mx-auto p-4 rounded text-gray-800">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block font-medium">Name</label>
          <input
            autoComplete="name"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-medium">Email</label>
          <input
            autoComplete="email"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block font-medium">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          ></textarea>
        </div>

        {error && <p className="text-red-600">{error}</p>}

        <div className="flex items-center space-x-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            disabled={loading}
          >
            {"Send"}
          </button>
          {loading && <LoadingIndicator />}
          {submitted && !loading && (
            <p className="text-green-600 text-sm">Sent. Thanks for reaching out!</p>
          )}
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
