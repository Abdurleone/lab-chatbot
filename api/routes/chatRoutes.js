import express from "express";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Response from "../models/Response.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());

// MongoDB connection setup
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`❌ MongoDB Connection Error: ${err.message}`);
    process.exit(1);
  }
};

connectDB();

// Chat endpoint
app.post("/api/chat", async (req, res) => {
  const userMessage = req.body.message?.toLowerCase().trim();

  // Debugging log to ensure we are receiving the request properly
  console.log("Received message:", userMessage);

  // Validate input
  if (!userMessage) {
    console.error("Error: No message provided in request.");
    return res.status(400).json({ error: "Message is required." });
  }

  try {
    // Find matching response from the database
    const response = await Response.findOne({
      keywords: { $in: userMessage.split(" ") }
    });

    const reply = response ? response.reply : "I'm not sure about that. Please contact support.";
    
    // Debugging log to ensure we have a reply
    console.log("Reply to user:", reply);

    // Send reply back to the client
    res.json({ reply });
  } catch (error) {
    console.error("Error fetching response from database:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ API running on http://localhost:${PORT}`);
});