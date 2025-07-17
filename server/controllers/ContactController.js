// server/controllers/ContactController.js

export const handleContactForm = (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  console.log("Contact form submission:", { name, email, message });

  res.json({ message: "Contact form submitted successfully" });
};

