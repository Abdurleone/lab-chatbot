import express from 'express';
import Result from '../models/Result.js';

const router = express.Router();

const resultsStatus = {
  "12345": "Your test results are ready. Please check your email.",
  "67890": "Your test is still being processed.",
};

router.get("/:testId", (req, res) => {
  const testId = req.params.testId;
  const status = resultsStatus[testId] || "Test ID not found. Please check again.";
  res.json({ status });
});

// GET /api/results
router.get('/', async (req, res) => {
  try {
    const results = await Result.find();
    res.json(results);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
