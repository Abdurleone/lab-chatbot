import mongoose from 'mongoose';

const labTestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const LabTest = mongoose.model('LabTest', labTestSchema);

export default LabTest;
