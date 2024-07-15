import avonModel from "../models/avonModel.js";
import fs from "fs";

const addAvonProduct = async (req, res) => {
    const avon = new avonModel({
        name: req.body.name,
        image: req.file.filename,
        price: Number(req.body.price),
        category: req.body.category,
        quantity: Number(req.body.quantity),
        validity: req.body.validity
    })
    try {
        await avon.save();
        res.json({ success: true, message: "Produto Adicionado" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Erro ao adicionar o produto" })
    }
}


const avonProductList = async (_, res) => {
    try {
        const avonProducts = await avonModel.find({})
        res.json({ success: true, data: avonProducts })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}


const updateAvonProduct = async (req, res) => {
    try {
        const product = await avonModel.findById(req.params.id);

        const data = { ...req.body };
        if (req.file) {
            fs.unlink(`uploads/avon/${product.image}`, () => { });
            data.image = `${req.file.filename}`;
        }

        await avonModel.findByIdAndUpdate(req.params.id, data);

    } catch (error) {
        console.log(error);

        res.json({ success: false, message: "Erro ao atualizar o produto" })
    }
    res.json({ success: true, message: "Produto Atualizado" })
}


const deleteAvonProduct = async (req, res) => {

    try {
        const product = await avonModel.findById(req.params.id);

        fs.unlink(`uploads/avon/${product.image}`, () => { });

        await avonModel.findByIdAndDelete(req.params.id);

        res.json({ success: true, message: "Produto Removido" });
    } catch (error) {
        console.log(error);
        res.json({ success: true, message: "Falha ao remover o produto" })
    }
}

export { addAvonProduct, avonProductList, updateAvonProduct, deleteAvonProduct }