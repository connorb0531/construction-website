// server/routes/contactRoutes.js

import express from "express";
import { handleContactForm } from "../controllers/ContactController.js";

const router = express.Router();

router.post("/", handleContactForm);

export default router;
