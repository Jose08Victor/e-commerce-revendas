import mongoose from "mongoose";

const avonSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    quantity: { type: Number, required: true },
    validity: { type: String, required: true },
})

const avonModel = mongoose.models.avonProducts || mongoose.model("avonProducts", avonSchema);

export default avonModel;