import jwt from 'jsonwebtoken';
import dotenv from "dotenv"

const tokenverify = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(401).send({ message: "Token not provided" });
    }

    const token = authHeader.split(' ')[1];
    
    jwt.verify(token, process.env.ACCESS_JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).send({ message: "Token is invalid or expired" });
        }

        // If token is valid, we pass the decoded token to the next middleware
        // req.user = decoded;  // Optionally, store the decoded user data
        next();
    });
};

export default tokenverify;
