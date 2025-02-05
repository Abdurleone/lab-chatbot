require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const responses = {
  "hello": "Hello! How can I assist you today?",
  "lab test prices": "Our lab test prices range from $20 to $200, depending on the test.",
  "appointment": "You can book an appointment by calling 123-456-7890.",
  "results status": "Results are typically available within 24-48 hours.",
};

app.post("/chat", (req, res) => {
  const userMessage = req.body.message.toLowerCase();
  const reply = responses[userMessage] || "I'm not sure about that. Please contact support.";
  res.json({ reply });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));