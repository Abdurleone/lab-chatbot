import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
  patient: {
    type: String,
    required: true,
  },
  test: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;