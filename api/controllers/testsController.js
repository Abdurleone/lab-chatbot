// controllers/testsController.js

import { tests as _tests } from "../data/labServices"; // Dummy data

// Get list of available tests
export function getTests(req, res) {
    res.json({ tests: _tests });
}
