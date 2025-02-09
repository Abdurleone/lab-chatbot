// config/dbConfig.js

import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// MongoDB connection setup
const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://localhost:27017/yourdbname'); // Replace 'yourdbname' with your actual database name
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
};

export default connectDB;