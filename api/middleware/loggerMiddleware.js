// middleware/loggerMiddleware.js

const loggerMiddleware = (req, _res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
    next(); // Proceed to the next middleware or route handler
};

export default loggerMiddleware;
