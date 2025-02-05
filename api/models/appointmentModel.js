// models/appointmentModel.js

class Appointment {
    constructor(id, patient, test, status) {
        this.id = id;
        this.patient = patient;
        this.test = test;
        this.status = status;
    }
}

export default Appointment;