import express from "express";
import cors from "cors";
import connectDB from './db.js'
import * as dotenv from "dotenv";
import { MongoClient } from "mongodb";
import { Keto } from "./Routes/Keto.js";

const app = express();
const PORT = 8000;
dotenv.config();

app.use(express.json());
app.use(cors());

//connect to database
connectDB();

const MONGO_URL = process.env.MONGO_URL;
//MongoDB connection
async function createConnection() {
    const client = new MongoClient(MONGO_URL);
    await client.connect();
    console.log("MongoDb is connected");
    return client;
}

export const client = await createConnection();

app.get("/", (req, res) => {
    res.send("Diet_Suggestion App Backend is Working");
});

app.use("/keto", Keto);


app.listen(PORT, () =>
    console.log(`https://localhost:${PORT}`)
);