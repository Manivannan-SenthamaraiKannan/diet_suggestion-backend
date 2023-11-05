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
import { Diet_to_Go } from './Routes/Diet_to_Go.js'
import { Low_Carbohydrate } from './Routes/Low_Carbohydrate.js'
import { Macrobiotic } from './Routes/Macrobiotic.js'
import { Paleolithic } from './Routes/Paleolithic.js'
import { SlimFast } from './Routes/SlimFast.js'
import { Pescetarianism } from './Routes/Pescetarianism.js'
import { Vegetarianism } from './Routes/Vegetarianism.js'
import { Whole30 } from './Routes/Whole30.js'
import { Zone } from './Routes/Zone.js'
import { Low_fat } from './Routes/Low_fat.js'
import { Raw_food } from './Routes/Raw_food.js'
import { Flexitarian } from './Routes/Flexitarian.js'
import { Diabetic } from "./Routes/Diabetic.js";
import { Dukan } from "./Routes/Dukan.js";
import { Alkaline } from "./Routes/Alkaline.js";
import { Low_Calorie } from "./Routes/Low_Calorie.js"
import { Vegan } from "./Routes/Vegan.js"

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
    res.send("<h1>Diet Suggestion Backend</h1>");
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
app.use('/macrobiotic', Macrobiotic)
app.use('/paleolithic', Paleolithic)
app.use('/slimfast', SlimFast)
app.use('/pescetarianism', Pescetarianism)
app.use('/vegetarianism', Vegetarianism)
app.use('/whole30', Whole30)
app.use('/zone', Zone)
app.use('/lowfat', Low_fat)
app.use('/rawfood', Raw_food)
app.use('/flexitarian', Flexitarian)
app.use('/diabetic', Diabetic)
app.use('/dukan', Dukan)
app.use('/alkaline', Alkaline)
app.use('/lowcalorie', Low_Calorie)
app.use('/vegan', Vegan)

app.listen(PORT, () =>
    console.log(`https://localhost:${PORT}`)
);