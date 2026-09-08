import dotenv from "dotenv";
import express from 'express';
import proxy from "express-http-proxy"
dotenv.config();

const app = express();


const PORT = process.env.PORT || 8001;
const AUTH_SERVICE = process.env.AUTH_SERVICE;
console.log(AUTH_SERVICE)
//middleware

app.use(express.json());
app.use("/auth", proxy(AUTH_SERVICE));

app.get("/", (req, res) => {
    return res.status(200).json({message:"Gateway is running", success: true});
})

app.listen(PORT, () => {console.log(`Gateway started on port ${PORT}`)})