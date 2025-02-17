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

    // Extract the text content from the response
    const aiResponse = response.data.candidates[0].content.parts[0].text;
    return aiResponse;
  } catch (error) {
    console.error('Error fetching AI response:', error);
    throw error;
  }
};