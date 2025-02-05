import authMiddleware from './middleware/authMiddleware.js';

// middleware/authMiddleware.js

function authMiddleware(req, res, next) {
    const token = req.headers["authorization"];

    if (!token) {
        return res.status(403).json({ error: "Access Denied, No Token Provided" });
    }

    // For now, let's just simulate a basic check
    if (token === "Bearer sample_token") {
        next(); // Token is valid, proceed to the next middleware/route handler
    } else {
        return res.status(401).json({ error: "Invalid Token" });
    }
}

export default authMiddleware;
