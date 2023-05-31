import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import { MongoClient } from "mongodb";
import { Keto } from "./Routes/Keto.js";
import { Mediterranean } from './Routes/Mediterranean.js';
import { fasting } from './Routes/Intermittent_fasting.js';
import { Plant } from './Routes/Plant_Based.js';
import { Weight_Watchers } from './Routes/Weight_Watchers.js';
import { Gluten_free } from './Routes/Gluten_free.js'
import { South_Beach } from './Routes/South_Beach.js'
import { Nutrisystem } from './Routes/Nutrisystem.js'
import { Diet_to_Go } from './Routes/Diet-to-Go'
import { Low_Carbohydrate } from './Routes/Low_Carbohydrate.js'

const app = express();
const PORT = 8000;
dotenv.config();

app.use(express.json());
app.use(cors());

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
app.use("/mediterranean", Mediterranean);
app.use("/fasting", fasting);
app.use("/plant", Plant)
app.use("/weight", Weight_Watchers)
app.use("/gluten", Gluten_free)
app.use('/south', South_Beach)
app.use('/nutrisystem', Nutrisystem)
app.use('/diettogo', Diet_to_Go)
app.use('/carbohydrate', Low_Carbohydrate)

app.listen(PORT, () =>
    console.log(`https://localhost:${PORT}`)
);