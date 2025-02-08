import express from "express";
import cors from "cors";
import helmet from "helmet"; // Import helmet
import connectDB from './config/dbConfig.js';
import config from './config/envConfig.js';
import authMiddleware from "./middleware/authMiddleware.js";
import errorMiddleware from "./middleware/errorMiddleware.js";
import loggerMiddleware from "./middleware/loggerMiddleware.js";
import { registerUser, loginUser } from "./controllers/userController.js"; // Import the user controller
import labServices from './services/labServices.js'; // Import labServices
import resultsRouter from './routes/results.js';

const app = express();
const PORT = config.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet()); // Use helmet for security
app.use(loggerMiddleware); // Log incoming requests

// Routes

// Home Route
app.get("/", (_, res) => {
    res.send("Welcome to the Medical Lab Chatbot API!");
});

// User Routes
app.post('/api/users/register', registerUser);
app.post('/api/users/login', loginUser);

// Protecting routes with authMiddleware
app.get("/api/protected", authMiddleware, (_, res) => {
    res.send("This is a protected route!");
});

// Inquiry Route
app.get("/api/inquiry", (_, res) => {
    const response = { message: "How can I assist you with lab services today?" };
    console.log("Response Sent:", response);
    res.json(response);
});

// Get List of Available Tests & Prices
app.get("/api/tests", (_, res) => {
    console.log("Fetching test list...");
    res.json({ tests: labServices.tests });
});

// Get Prices Route
app.get("/api/prices", (_, res) => {
    const prices = labServices.tests.map(test => ({
        name: test.name,
        price: test.price,
    }));

    console.log("Fetching prices...");
    res.json({ prices });
});

// Get Status of Lab Results (Dummy Data)
app.get("/api/results/:patientName", (req, res) => {
    const { patientName } = req.params;
    const result = labServices.appointments.find(a => a.patient.toLowerCase() === patientName.toLowerCase());

    if (result) {
        const response = { patient: patientName, test: result.test, status: result.status };
        console.log("Result Status Fetched:", response);
        res.json(response);
    } else {
        console.log(`No results found for ${patientName}`);
        res.status(404).json({ error: "No test results found for this patient." });
    }
});

// Book an Appointment (POST)
app.post("/api/appointments", (req, res) => {
    const { patient, test } = req.body;

    if (!patient || !test) {
        return res.status(400).json({ error: "Patient name and test are required!" });
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

// Chat Route (POST)
app.post("/api/chat", (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ error: "Message is required!" });
    }

    // Dummy response for now
    const response = { reply: `You said: ${message}` };
    console.log("Chat Message Received:", message);
    res.json(response);
});

app.use('/api/results', authMiddleware, resultsRouter);

// Error Handling Middleware (last)
app.use(errorMiddleware);

// Start Server
app.listen(PORT, () => {
    console.log(`✅ API running on port ${PORT}`);
});

export default app;
