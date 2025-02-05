import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
    const token = req.headers["authorization"];
    
    if (!token) {
        return res.status(403).json({ error: "Access Denied, No Token Provided" });
    }

    // Remove the "Bearer " prefix (if exists) and get the token part
    const tokenPart = token.startsWith("Bearer ") ? token.slice(7, token.length) : token;

    try {
        // Verify the token using the secret key (stored in .env for security)
        const decoded = jwt.verify(tokenPart, process.env.JWT_SECRET_KEY);

        // Attach the decoded user info to the request object
        req.user = decoded; 
        next(); // Proceed to the next middleware or route handler
    } catch (err) {
        return res.status(401).json({ error: "Invalid Token" });
    }
};

export default authMiddleware;
