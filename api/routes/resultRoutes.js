import { Router } from "express";
const router = Router();

const resultsStatus = {
  "12345": "Your test results are ready. Please check your email.",
  "67890": "Your test is still being processed.",
};

router.get("/:testId", (req, res) => {
  const testId = req.params.testId;
  const status = resultsStatus[testId] || "Test ID not found. Please check again.";
  res.json({ status });
});

export default router;
