import { Router } from "express";
const router = Router();

const availableTests = ["Blood Test", "X-Ray", "MRI", "COVID-19 Test"];

router.get("/tests", (req, res) => {
  res.json({ tests: availableTests });
});

export default router;
