import mongoose from 'mongoose';

const resultSchema = new mongoose.Schema({
  testName: {
    type: String,
    required: true,
  },
  result: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Result = mongoose.model('Result', resultSchema);

export default Result;
