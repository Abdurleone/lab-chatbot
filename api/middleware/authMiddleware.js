import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
    const token = req.header("Authorization");
    
    if (!token) {
        return res.status(401).json({ message: "No token, authorization denied" });
    }

    try {
        const decoded = jwt.verify(token, 'your_jwt_secret'); // Replace 'your_jwt_secret' with your actual secret

        req.user = decoded.user; 
        next();
    } catch (err) {
        return res.status(401).json({ message: "Token is not valid" });
    }
};

export default authMiddleware;
