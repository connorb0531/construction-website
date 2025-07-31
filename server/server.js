// server/server.js

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import projectRoutes from "./routes/projectRoutes.js";
import contactRoutes from "./routes/contactRoutes.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://construction-website-client.onrender.com/"
  ]
}));


app.use(express.json()); // Parse JSON request bodies
app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes)

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
