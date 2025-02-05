// config/envConfig.js

import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export default {
    PORT: process.env.PORT || 5000,
    MONGO_URI: process.env.MONGO_URI, // MongoDB URI
    API_KEY: process.env.API_KEY, // API keys (if any)
    // You can add more configurations here as needed
};
