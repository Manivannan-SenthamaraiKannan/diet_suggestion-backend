import express from "express";
import { client } from "../index.js";
const router = express.Router();

//add products
router.post("/", async (req, res) => {
    const newProduct = req.body;
    const result = await client
        .db("DietPlan")
        .collection("Low_fat")
        .insertMany(newProduct);
    res.send(result);
});

// get all products
router.get("/", async (req, res) => {
    const result = await client
        .db("DietPlan")
        .collection("Low_fat")
        .find({})
        .toArray();
    res.send(result);
});

//get products by ID
router.get("/:id", async (req, res) => {
    const id = parseInt(req.params.id)
    const result = await client
        .db("DietPlan")
        .collection("Low_fat")
        .findOne({ id: id });
    result
        ? res.send(result)
        : res.status(404).send({ message: "No Diet found" });
});

export const Low_fat = router;