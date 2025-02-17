// config/envConfig.js

import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const config = {
    PORT: process.env.PORT || 5000,
    MONGO_URI: process.env.MONGO_URI, // MongoDB URI
    JWT_SECRET: process.env.JWT_SECRET, // JWT Secret
    GEMINI_API_KEY: process.env.GEMINI_API_KEY, // API keys (if any)
    // You can add more configurations here as needed
};

export default config;
