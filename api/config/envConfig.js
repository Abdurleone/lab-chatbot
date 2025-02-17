// config/envConfig.js

import dotenv from 'dotenv';
import hashApiKey from '../hashApiKey.js';

// Load environment variables from .env file
dotenv.config();

const config = {
    PORT: process.env.PORT || 5000,
    MONGO_URI: process.env.MONGO_URI, // MongoDB URI
    JWT_SECRET: process.env.JWT_SECRET, // JWT Secret
    GEMINI_API_KEY: hashApiKey(process.env.GEMINI_API_KEY), // Hashed API key
    // You can add more configurations here as needed
};

export default config;
