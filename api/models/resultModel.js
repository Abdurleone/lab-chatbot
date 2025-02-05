// models/resultModel.js

class Result {
    constructor(patientName, test, status) {
        this.patientName = patientName;
        this.test = test;
        this.status = status;
    }
}

export default Result;
