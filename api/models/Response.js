import mongoose from 'mongoose';

const responseSchema = new mongoose.Schema({
  keywords: {
    type: [String],
    required: true,
  },
  reply: {
    type: String,
    required: true,
  },
});

const Response = mongoose.model('Response', responseSchema);

export default Response;