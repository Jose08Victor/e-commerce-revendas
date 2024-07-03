import mongoose from "mongoose";

const avonSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    old_price: { type: Number, required: true },
    new_price: { type: Number, required: true },
    category: { type: String, required: true },
    quantity: { type: Number, required: true },
    validity: { type: Date, required: true },
})

const avonModel = mongoose.models.avonProducts || mongoose.model("avonProducts", avonSchema);

export default avonModel;