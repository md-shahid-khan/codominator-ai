import dotenv from "dotenv";
import express from 'express';
import connectDb from "./config/db.js";
import dns from 'dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);
dotenv.config();

const app = express();

const PORT = process.env.PORT || 9001;

app.use(express.json());

app.get("/health", (req, res) => {
    return res.status(200).json({message:"Gateway is running", success: true});
})

app.listen(PORT, async () => {
    console.log(`AuthService started on port ${PORT}`)
    await connectDb()
})