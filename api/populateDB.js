import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/dbConfig.js';
import LabTest from './models/LabTest.js';
import Appointment from './models/Appointment.js';

dotenv.config();

// Connect to MongoDB
connectDB();

// Sample data
const labTests = [
  { name: 'Blood Test', price: 50 },
  { name: 'Urine Test', price: 30 },
  { name: 'X-Ray', price: 100 },
];

const appointments = [
  { patient: 'John Doe', test: 'Blood Test', status: 'Pending' },
  { patient: 'Jane Smith', test: 'Urine Test', status: 'Completed' },
];

// Populate the database
const populateDB = async () => {
  try {
    await LabTest.deleteMany();
    await Appointment.deleteMany();

    await LabTest.insertMany(labTests);
    await Appointment.insertMany(appointments);

    console.log('Database populated successfully!');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error populating database:', error);
    mongoose.connection.close();
  }
};

populateDB();