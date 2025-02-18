import express from 'express';
import { fetchAIResponse, fetchData } from '../services/dataService.js';

const router = express.Router();

router.post('/chat/ai', async (req, res) => {
  const { message } = req.body;

  try {
    // Determine the type of query or interaction
    if (message.startsWith('data:')) {
      const query = message.replace('data:', '').trim();
      const dataResponse = await fetchData(query);
      res.json({ reply: dataResponse });
    } else {
      const aiResponse = await fetchAIResponse(message);
      res.json({ reply: aiResponse });
    }
  } catch (error) {
    console.error('Failed to process request:', error);
    res.status(500).json({ error: 'Failed to process request' });
  }
});

export default router;