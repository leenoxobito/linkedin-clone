/*import admin from "../firebaseAdmin.js";

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split("Bearer ")[1];
        if (!token) return res.status(401).json({ message : "No token"});

        const decoded = await admin.auth().verifyIdToken(token);
        req.user = decoded;
    } catch {
        res.status(401).json({ message: "Invalid token"});
    }
};

export default authMiddleware;*/