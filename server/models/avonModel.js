import mongoose from "mongoose";

const avonProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    imageName: { type: String, required: true },
    imageURL: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    quantity: { type: Number, required: true },
    validity: { type: String, required: true },
});

const avonKitSchema = new mongoose.Schema({
    nameOfProducts: {type: Array, required: true},
    imageName: { type: String, required: true },
    imageURL: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
});

export const avonProductModel = mongoose.models.avonProducts || mongoose.model("avonProducts", avonProductSchema);

export const avonKitModel = mongoose.models.avonKits || mongoose.model("avonKits", avonKitSchema);