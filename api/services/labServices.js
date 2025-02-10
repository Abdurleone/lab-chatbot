import LabTest from '../models/LabTest.js';
import Appointment from '../models/Appointment.js';

const getTests = async () => {
  return await LabTest.find();
};

const getAppointments = async () => {
  return await Appointment.find();
};

const labServices = {
  getTests,
  getAppointments,
};

export default labServices;