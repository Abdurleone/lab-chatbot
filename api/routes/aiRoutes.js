import express from 'express';
import { fetchAIResponse } from '../services/aiService.js';

const router = express.Router();

router.post('/ai', async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required.' });
  }
  try {
    const aiResponse = await fetchAIResponse(prompt);
    res.json({ response: aiResponse });
  } catch (error) {
    console.error('Failed to fetch AI response:', error);
    res.status(500).json({ error: 'Failed to fetch AI response' });
  }
});

export default router;