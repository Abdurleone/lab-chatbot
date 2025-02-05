require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.json());
// Import Routes
const chatRoutes = require("./routes/chatRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const labRoutes = require("./routes/labRoutes");
const resultRoutes = require("./routes/resultRoutes");
const priceRoutes = require("./routes/priceRoutes");

// Use Routes
app.use("/chat", chatRoutes);
app.use("/appointments", appointmentRoutes);
app.use("/labs", labRoutes);
app.use("/results", resultRoutes);
app.use("/prices", priceRoutes);

// Root Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));
