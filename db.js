import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();
const MONGO_URL = process.env.MONGO_URL;

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGO_URL);
        console.log(`MongoDB Connected`);
    } catch (error) {
        console.error(error.message);
    }
}

export default connectDB;