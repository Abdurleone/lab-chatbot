import express from 'express';
import Result from '../models/Result.js';

const router = express.Router();

// GET /api/results
router.get('/', async (req, res) => {
  try {
    const results = await Result.find();
    res.json(results);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/results/:testId
router.get('/:testId', (req, res) => {
  const testId = req.params.testId;
  const status = resultsStatus[testId] || 'Test ID not found. Please check again.';
  res.json({ status });
});

export default router;
