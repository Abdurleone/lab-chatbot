import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Response from './models/Response.js';

dotenv.config();

const responses = [
  { keywords: ["hello", "hi"], reply: "Hello! How can I assist you today?" },
  { keywords: ["lab test prices", "how much are lab tests", "test cost"], reply: "Our lab test prices range from $20 to $200, depending on the test." },
  { keywords: ["appointment", "book appointment"], reply: "You can book an appointment by calling 123-456-7890." },
  { keywords: ["results status", "test results"], reply: "Results are typically available within 24-48 hours." },
  { keywords: ["hotel", "booking"], reply: "Welcome to Abdurleone! You can book a hotel room by visiting our website." }
];

const populateDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB Connected');

    await Response.deleteMany({});
    console.log('✅ Existing responses deleted');

    await Response.insertMany(responses);
    console.log('✅ Responses inserted');

    process.exit();
  } catch (err) {
    console.error(`❌ Error: ${err.message}`);
    process.exit(1);
  }
};

populateDB();