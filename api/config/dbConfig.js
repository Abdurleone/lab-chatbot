// config/dbConfig.js

import { connect } from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// MongoDB connection setup
const connectDB = async () => {
    try {
        const conn = await connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        console.log('Database connection successful');
    } catch (error) {
        console.error(`Error: ${error.message}`);
        console.log('Database connection unsuccessful');
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;