// controllers/resultsController.js

import { appointments } from "../data/labServices"; // Dummy data

// Get status of lab results for a patient
export function getResultStatus(req, res) {
    const { patientName } = req.params;
    const result = appointments.find(a => a.patient.toLowerCase() === patientName.toLowerCase());

    if (result) {
        res.json({ patient: patientName, test: result.test, status: result.status });
    } else {
        res.status(404).json({ error: "No test results found for this patient." });
    }
}