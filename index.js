import express from "express";
import * as dotenv from "dotenv";
import { MongoClient } from "mongodb";
import cors from "cors";

const app = express();
const PORT = 8000;
dotenv.config();

app.use(express.json());
app.use(cors());

const MONGO_URL = process.env.MONGO_URL;

app.get("/", (req, res) => {
    res.send("Diet_Suggestion App Backend is Working");
});


app.listen(PORT, () =>
    console.log(`Server started on PORT:${PORT}`)
);