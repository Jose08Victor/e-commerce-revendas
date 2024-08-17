import mongoose from "mongoose";

const naturaProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    quantity: { type: Number, required: true },
    validity: { type: String, required: true },
});

const naturaKitSchema = new mongoose.Schema({
    nameOfProducts: {type: Array, required: true},
    image: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
});

export const naturaProductModel = mongoose.models.naturaProducts || mongoose.model("naturaProducts", naturaProductSchema);

export const naturaKitModel = mongoose.models.naturaKits || mongoose.model("naturaKits", naturaKitSchema);