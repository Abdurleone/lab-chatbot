import axios from 'axios';
import config from '../config/envConfig.js';

const aiPromptKey = config.AI_PROMPT_KEY;

export const fetchAIResponse = async (prompt) => {
  try {
    const response = await axios.post('https://api.example.com/ai', {
      prompt: prompt,
      key: aiPromptKey
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching AI response:', error);
    throw error;
  }
};