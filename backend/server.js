import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

// Allow requests from the React frontend
app.use(cors());

// Allow JSON request bodies
app.use(express.json());


// ---------------------------------------------
// HEALTH CHECK
// ---------------------------------------------

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Backend is running successfully.",
  });
});


// ---------------------------------------------
// CONTACT FORM
// ---------------------------------------------

app.post("/api/contact", (req, res) => {
  const {
    firstName,
    lastName,
    email,
    countryCode,
    phone,
    category,
    message,
  } = req.body;

  console.log("New contact form submission:");

  console.log({
    firstName,
    lastName,
    email,
    countryCode,
    phone,
    category,
    message,
  });

  res.json({
    success: true,
    message: "Contact form received successfully.",
  });
});


// ---------------------------------------------
// START SERVER
// ---------------------------------------------

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});