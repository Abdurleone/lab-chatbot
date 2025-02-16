import request from 'supertest';
import app from './server.js';

describe('Medical Lab Chatbot API', () => {
  test('GET / - Welcome Message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Welcome to the Medical Lab Chatbot API!');
  });

  test('POST /api/users/register - User Registration', async () => {
    const res = await request(app)
      .post('/api/users/register')
      .send({ username: 'testuser', password: 'testpass' });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('message', 'User registered successfully');
  });

  test('GET /api/inquiry - Inquiry Message', async () => {
    const res = await request(app).get('/api/inquiry');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message', 'How can I assist you with lab services today?');
  });

  test('POST /api/appointments - Create Appointment', async () => {
    const res = await request(app)
      .post('/api/appointments')
      .send({ patient: 'John Doe', test: 'Blood Test' });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('message', 'Appointment booked successfully!');
  });

  test('GET /api/results/:patientName - Get Results', async () => {
    const res = await request(app).get('/api/results/John Doe');
    expect([200, 404]).toContain(res.statusCode);
    expect([200, 404]).toContain(res.statusCode);
    const responseBody = res.body;
    expect(responseBody).toEqual(
      res.statusCode === 200
        ? expect.objectContaining({ patient: 'John Doe' })
        : expect.objectContaining({ error: 'No test results found for this patient.' })
    );
  });

  test('POST /api/chat - Chat Message', async () => {
    const res = await request(app)
      .post('/api/chat')
      .send({ message: 'Hello' });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('reply', 'You said: Hello');
  });

  test('GET /api/timeslots - Available Timeslots', async () => {
    const res = await request(app).get('/api/timeslots');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('timeslots');
    expect(res.body.timeslots).toBeInstanceOf(Array);
  });
});