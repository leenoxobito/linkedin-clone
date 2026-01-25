/*import express from 'express';
import admin from '../firebaseAdmin.js';
import User from '../models/User.js';

const router = express.Router();

router.post("/google", async (req, res) => {
    try {
        const { token} = req.body;
        const decodedToken = await admin.auth().verifyIdToken(token);
        const { uid, name, email, picture } = decodedToken;

        let user = await User.findOne ({ uid});

        if (!user) {
            user = await User.create({
                uid,
                name,
                email,
                photoURL: picture,
            });
        }
        res.status(200).json(user);
    } catch (error){
        res.status(401).json({message: "Unauthorized"});
    }
});

export default router;*/

 