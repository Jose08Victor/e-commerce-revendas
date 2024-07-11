import mongoose from "mongoose";

const naturaSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    quantity: { type: Number, required: true },
    validity: { type: String, required: true },
})

const naturaModel = mongoose.models.naturaProducts || mongoose.model("naturaProducts", naturaSchema);

export default naturaModel;