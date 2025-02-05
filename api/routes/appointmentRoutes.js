import { Router } from "express";
const router = Router();

router.post("/book", (req, res) => {
  const { name, date, time } = req.body;
  if (!name || !date || !time) {
    return res.status(400).json({ error: "Please provide name, date, and time." });
  }
  res.json({ message: `Appointment booked for ${name} on ${date} at ${time}.` });
});

export default router;
