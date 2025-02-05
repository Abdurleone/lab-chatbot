// controllers/UserController.js

import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// Mock user data (replace with database logic later)
const users = [
    { id: 1, username: "user1", password: "$2a$10$U4u/0S8j0O0A6ftGH35CfeGG68ZpqjzAqxn5ZZ5jATzM7WRbAw5iu" }, // password: 'password123'
];

// User login
const loginUser = (req, res) => {
    const { username, password } = req.body;

    const user = users.find((user) => user.username === username);

    if (!user) {
        return res.status(400).json({ error: "Invalid Credentials" });
    }

    // Compare password with hashed password in database
    bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) {
            return res.status(500).json({ error: "Internal Server Error" });
        }
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid Credentials" });
        }

        // Check if JWT secret key is defined
        if (!process.env.JWT_SECRET_KEY) {
            return res.status(500).json({ error: "JWT Secret Key not defined" });
        }

        // Generate JWT
        const token = jwt.sign({ userId: user.id, username: user.username }, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });

        return res.status(200).json({ message: "Login Successful", token });
    });
};

export default {
    loginUser,
};