import { Router } from "express";
const router = Router();

const testPrices = {
  "Blood Test": "$50",
  "X-Ray": "$100",
  "MRI": "$300",
  "COVID-19 Test": "$20",
};

router.get("/:testName", (req, res) => {
  const testName = req.params.testName;
  const price = testPrices[testName] || "Price not available. Please check the test name.";
  res.json({ price });
});

export default router;
