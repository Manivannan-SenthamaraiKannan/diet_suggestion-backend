import express from 'express'
import * as dotenv from 'dotenv'
import { MongoClient } from 'mongodb';
import cors from "cors";

const app = express();
const PORT = 4000;
const MONGO_URL = process.env.MONGO_URL;


dotenv.config();

app.use(express.json());
app.use(cors());

// mongodb connection

async function createConnection() {
    const client = new MongoClient(MONGO_URL)
    await client.connect();
    console.log("DB is connected successfully")
    return client;
}

export const client = await createConnection();

// default route landing page 
app.get("/", (req, res) => {
    res.send("Diet-Suggestion App Backend");
});

app.listen(PORT, () => {
    console.log(`Server started at the PORT:${PORT}`)
}
)