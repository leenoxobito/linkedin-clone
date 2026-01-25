/*import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from '../routes/auth.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(console.error);

app.use('/api/auth', authRoutes);

app.listen(process.env.PORT, () =>
console.log(`Backend running on port ${process.env.PORT}`)
);*/