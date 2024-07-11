import naturaModel from "../models/naturaModel.js";
import fs from "fs";

const addNaturaProduct = async (req, res) => {
    let image_filename = `${req.file.filename}`;

    const natura = new naturaModel({
        name: req.body.name,
        image: image_filename,
        price: req.body.price,
        category: req.body.category,
        quantity: req.body.quantity,
        validity: req.body.validity
    })
    try {
        await natura.save();
        res.json({ success: true, message: "Produto Adicionado" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Erro ao adicionar o produto" })
    }
}


const naturaProductList = async (_, res) => {
    try {
        const naturaProducts = await naturaModel.find({})
        res.json({ success: true, data: naturaProducts })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}


const updateNaturaProduct = async (req, res) => {
    try {
        const product = await naturaModel.findById(req.params.id);

        const data = { ...req.body };
        if (req.file) {
            fs.unlink(`uploads/natura/${product.image}`, () => { });
            data.image = `${req.file.filename}`;
        }

        await naturaModel.findByIdAndUpdate(req.params.id, data);

    } catch (error) {
        console.log(error);

        res.json({ success: false, message: "Erro ao atualizar o produto" })
    }
    res.json({ success: true, message: "Produto Atualizado" })
}


const deleteNaturaProduct = async (req, res) => {

    try {
        const product = await naturaModel.findById(req.params.id);

        fs.unlink(`uploads/natura/${product.image}`, () => { });

        await naturaModel.findByIdAndDelete(req.params.id);

        res.json({ success: true, message: "Produto Removido" });
    } catch (error) {
        console.log(error);
        res.json({ success: true, message: "Falha ao remover o produto" })
    }
}

export { addNaturaProduct, naturaProductList, updateNaturaProduct, deleteNaturaProduct }