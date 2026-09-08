import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;
const connectDb = async () => {
    try{
        const connection = await mongoose.connect(MONGODB_URI)
        console.log("MongoDB Connected");
    }catch(err){
        console.log("MongoDB Connection Error:", err.message);
        process.exit(1);
    }
}

export default connectDb;