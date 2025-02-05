import request from "supertest";
import app from "../server.js"; // Ensure server.js exports `app`

let token;

describe("Medical Lab API Endpoints", () => {
    // Test the Home Route
    test("GET / should return welcome message", async () => {
        const res = await request(app).get("/");
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe("Welcome to the Medical Lab Chatbot API!");
    });

    // Test Getting Lab Tests
    test("GET /api/tests should return a list of lab tests", async () => {
        const res = await request(app).get("/api/tests");
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty("tests");
        expect(res.body.tests.length).toBeGreaterThan(0);
    });

    // Test Booking an Appointment (POST)
    test("POST /api/appointments should create an appointment", async () => {
        const newAppointment = { patient: "Alice Doe", test: "Blood Test" };

        const res = await request(app)
            .post("/api/appointments")
            .send(newAppointment)
            .set("Accept", "application/json");

        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty("message", "Appointment booked successfully!");
        expect(res.body.appointment).toMatchObject(newAppointment);
    });

    // Test Getting a Patient's Results (404 if not found)
    test("GET /api/results/:patientName should return test result or 404", async () => {
        const res = await request(app).get("/api/results/Unknown");
        expect(res.statusCode).toBe(404);
        expect(res.body).toHaveProperty("error", "No test results found for this patient.");
    });

    // Test Login Route
    test("POST /api/login should return a token on successful login", async () => {
        const loginData = { username: "user1", password: "password123" }; // Correct credentials

        const res = await request(app)
            .post("/api/login")
            .send(loginData);

        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty("token");

        token = res.body.token; // Store the token for later tests
    });

    // Test Protected Route (after login)
    test("GET /api/protected should return 'This is a protected route!' when valid token is provided", async () => {
        const res = await request(app)
            .get("/api/protected")
            .set("Authorization", `Bearer ${token}`); // Use the token in Authorization header

        expect(res.statusCode).toBe(200);
        expect(res.text).toBe("This is a protected route!");
    });

    // Test Access Denied without token
    test("GET /api/protected should return 403 when no token is provided", async () => {
        const res = await request(app).get("/api/protected");

        expect(res.statusCode).toBe(403);
        expect(res.body).toHaveProperty("error", "Access Denied, No Token Provided");
    });
});
