import express from "express";
import sanitizeHtml from "sanitize-html";
import cors from "cors";
import helmet from "helmet"; 
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import connectDB from "./config/dbConfig.js";
import config from "./config/envConfig.js";
import authMiddleware from "./middleware/authMiddleware.js";
import errorMiddleware from "./middleware/errorMiddleware.js";
import loggerMiddleware from "./middleware/loggerMiddleware.js";
import { registerUser, loginUser } from "./controllers/userController.js"; 
import labServices from "./services/labServices.js"; 
import resultsRouter from "./routes/results.js";

const app = express();
const PORT = config.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet()); 
app.use(loggerMiddleware); 

// Routes
app.get("/", (_, res) => {
    res.send("Welcome to the Medical Lab Chatbot API!");
});

// User Routes
app.post("/api/users/register", registerUser);
app.post("/api/users/login", loginUser);

// Inquiry Route
app.get("/api/inquiry", (_, res) => {
    const response = { message: "How can I assist you with lab services today?" };
    console.log("Response Sent:", response);
    res.json(response);
});

// Get List of Available Tests
app.get("/api/tests", (_, res) => {
    console.log("Fetching test list...");
    
    if (!labServices.tests) {
        return res.status(500).json({ error: "Lab services data not found." });
    }

    res.json({ tests: labServices.tests });
});

// Get Prices
app.get("/api/prices", (_, res) => {
    if (!labServices.tests) {
        console.log("Tests data not found.");
        return res.status(500).json({ error: "Tests data not found." });
    }

    const prices = labServices.tests.map(test => ({
        name: test.name,
        price: test.price,
    }));

    console.log("Fetching prices...");
    res.json({ prices });
});

// Get Status of Lab Results
app.get("/api/results/:patientName", (req, res) => {
    const { patientName } = req.params;

    if (!labServices.appointments) {
        console.log("Appointments data not found.");
        return res.status(500).json({ error: "Appointments data not found." });
    }

    const result = labServices.appointments.find(a => a.patient.toLowerCase() === patientName.toLowerCase());

    if (result) {
        const response = { patient: patientName, test: result.test, status: result.status };
        console.log("Result Status Fetched:", response);
        res.json(response);
    } else {
        res.status(404).json({ error: "No test results found for this patient." });
    }
});

// Book an Appointment
app.post("/api/appointments", (req, res) => {
    const { patient, test } = req.body;

    if (!patient || !test) {
        return res.status(400).json({ error: "Patient name and test are required!" });
    }

    if (!labServices.appointments) {
        return res.status(500).json({ error: "Appointments service is unavailable." });
    }

    const newAppointment = {
        id: labServices.appointments.length + 1,
        patient,
        test,
        status: "Pending"
    };

    labServices.appointments.push(newAppointment);
    console.log("New Appointment Created:", newAppointment);
    res.status(201).json({ message: "Appointment booked successfully!", appointment: newAppointment });
});

// Chat Route
app.post("/api/chat", (req, res) => {
    let { message } = req.body;
    message = sanitizeHtml(message);

    if (!message) {
        return res.status(400).json({ error: "Message is required!" });
    }

    console.log("Chat Message Received:", message);

    const response = { reply: `You said: ${message}` };
    res.json(response);
});

// Protect /api/results with authMiddleware
app.use("/api/results", authMiddleware, resultsRouter);

// Serve static files from React frontend
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(path.join(__dirname, "../lab-chatbot-ui/build")));

// Handle React frontend routing
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../lab-chatbot-ui/build/index.html"));
});

// Error Handling Middleware
app.use(errorMiddleware);

// Start Server
app.listen(PORT, () => {
    console.log(`✅ API running on port ${PORT}`);
});

export default app;

