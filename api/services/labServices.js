const labServices = {
  tests: [
    { name: 'Blood Test', price: 50 },
    { name: 'Urine Test', price: 30 },
    { name: 'X-Ray', price: 100 },
  ],
  appointments: [
    { id: 1, patient: 'John Doe', test: 'Blood Test', status: 'Completed' },
    { id: 2, patient: 'Jane Smith', test: 'Urine Test', status: 'Pending' },
  ],
};

export default labServices;