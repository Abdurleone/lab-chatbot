import axios from 'axios';
import config from '../config/envConfig.js';

const aiPromptKey = config.GEMINI_API_KEY;

export const fetchAIResponse = async (prompt) => {
  try {
    const response = await axios.post(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${aiPromptKey}`, {
      contents: [{
        parts: [{ text: prompt }]
      }]
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching AI response:', error);
    throw error;
  }
};