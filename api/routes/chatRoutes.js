import express from "express";
import cors from "cors";
import helmet from "helmet";

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());

// Predefined responses
const responses = [
  { keywords: ["hello", "hi"], reply: "Hello! How can I assist you today?" },
  { keywords: ["lab test prices", "how much are lab tests", "test cost"], reply: "Our lab test prices range from $20 to $200, depending on the test." },
  { keywords: ["appointment", "book appointment"], reply: "You can book an appointment by calling 123-456-7890." },
  { keywords: ["results status", "test results"], reply: "Results are typically available within 24-48 hours." },
  { keywords: ["hotel", "booking"], reply: "Welcome to Abdurleone! You can book a hotel room by visiting our website." }
];

// Chat endpoint
app.post("/api/chat", (req, res) => {
  const userMessage = req.body.message?.toLowerCase().trim();

  // Debugging log to ensure we are receiving the request properly
  console.log("Received message:", userMessage);

  // Validate input
  if (!userMessage) {
    console.error("Error: No message provided in request.");
    return res.status(400).json({ error: "Message is required." });
  }

  // Find matching response
  const response = responses.find(({ keywords }) =>
    keywords.some(keyword => userMessage.includes(keyword))
  );

  const reply = response ? response.reply : "I'm not sure about that. Please contact support.";
  
  // Debugging log to ensure we have a reply
  console.log("Reply to user:", reply);

  // Send reply back to the client
  res.json({ reply });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ API running on http://localhost:${PORT}`);
});