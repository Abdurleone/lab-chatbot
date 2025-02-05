// controllers/appointmentsController.js

import { appointments as _appointments } from "../data/labServices"; // Dummy data

// Create an appointment
export function createAppointment(req, res) {
    const { patient, test } = req.body;

    if (!patient || !test) {
        return res.status(400).json({ error: "Patient name and test are required!" });
    }

    const newAppointment = {
        id: _appointments.length + 1,
        patient,
        test,
        status: "Pending"
    };

    _appointments.push(newAppointment);
    res.status(201).json({ message: "Appointment booked successfully!", appointment: newAppointment });
}

// Fetch all appointments (Optional)
export function getAllAppointments(req, res) {
    res.json({ appointments: _appointments });
}
