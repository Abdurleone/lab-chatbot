const express = require("express");
const router = express.Router();

const availableTests = ["Blood Test", "X-Ray", "MRI", "COVID-19 Test"];

router.get("/tests", (req, res) => {
  res.json({ tests: availableTests });
});

module.exports = router;
