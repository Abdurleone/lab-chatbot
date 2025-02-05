import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // Allows API to handle JSON requests
app.use(cors()); // Enables cross-origin requests

// Dummy data for now
const labServices = {
    tests: [
        { id: 1, name: "Blood Test", price: "$50", estimated_time: "24 hours" },
        { id: 2, name: "COVID-19 PCR Test", price: "$80", estimated_time: "12 hours" },
        { id: 3, name: "Urine Test", price: "$30", estimated_time: "8 hours" }
    ],
    appointments: [
        { id: 1, patient: "Yahya AbdulKadir", test: "Blood Test", status: "Confirmed" },
        { id: 2, patient: "Jane Smith", test: "COVID-19 PCR Test", status: "Pending" }
    ]
};

// Routes

// Home Route
app.get("/", (_, res) => {
    res.send("Welcome to the Medical Lab Chatbot API!");
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

// Start Server
app.listen(PORT, () => {
    console.log(`✅ API running on port ${PORT}`);
});
