import dotenv from "dotenv";
import express from 'express';
dotenv.config();

const app = express();

const PORT = process.env.PORT || 8001;

app.use(express.json());

app.get("/gateway", (req, res) => {
    return res.status(200).json({message:"Gateway is running", success: true});
})

app.listen(PORT, () => {console.log(`Gateway started on port ${PORT}`)})