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
import Appointment from "./models/Appointment.js";

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

app.post('/api/users/register', registerUser);
app.post('/api/users/login', loginUser);

app.get("/api/protected", authMiddleware, (_, res) => {
    res.send("This is a protected route!");
});

app.get("/api/inquiry", (_, res) => {
    const response = { message: "How can I assist you with lab services today?" };
    console.log("Response Sent:", response);
    res.json(response);
});

app.get("/api/tests", async (_, res) => {
    console.log("Fetching test list...");
    const tests = await labServices.getTests();
    res.json({ tests });
});

app.get("/api/prices", async (_, res) => {
    console.log("Fetching prices...");
    const tests = await labServices.getTests();
    const prices = tests.map(test => ({
        name: test.name,
        price: test.price,
    }));
    res.json({ prices });
});

app.get("/api/results/:patientName", async (req, res) => {
    const { patientName } = req.params;
    const appointments = await labServices.getAppointments();
    const result = appointments.find(a => a.patient.toLowerCase() === patientName.toLowerCase());

    if (result) {
        const response = { patient: patientName, test: result.test, status: result.status };
        console.log("Result Status Fetched:", response);
        res.json(response);
    } else {
        console.log(`No results found for ${patientName}`);
        res.status(404).json({ error: "No test results found for this patient." });
    }
});

app.post("/api/appointments", async (req, res) => {
    const { patient, test } = req.body;

    if (!patient || !test) {
        return res.status(400).json({ error: "Patient name and test are required!" });
    }

    const newAppointment = {
        patient,
        test,
        status: "Pending"
    };

    await Appointment.create(newAppointment);
    console.log("New Appointment Created:", newAppointment);
    res.status(201).json({ message: "Appointment booked successfully!", appointment: newAppointment });
});

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

app.get("/api/timeslots", async (_, res) => {
    console.log("Fetching available timeslots...");
    const timeslots = [
        { id: 1, time: "09:00 AM - 10:00 AM" },
        { id: 2, time: "10:00 AM - 11:00 AM" },
        { id: 3, time: "11:00 AM - 12:00 PM" },
        { id: 4, time: "01:00 PM - 02:00 PM" },
        { id: 5, time: "02:00 PM - 03:00 PM" },
    ];
    res.json({ timeslots });
});

app.use("/api/results", authMiddleware, resultsRouter);

// Serve static files from React frontend
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(path.join(__dirname, "../lab-chatbot-ui/build")));

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../lab-chatbot-ui/build/index.html'));
});

// Error Handling Middleware (last)
app.use(errorMiddleware);

// Start Server
app.listen(PORT, () => {
    console.log(`✅ API running on port ${PORT}`);
});

export default app;

