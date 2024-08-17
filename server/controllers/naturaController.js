import { naturaProductModel, naturaKitModel } from "../models/naturaModel.js";
import fs from "fs";

export const addNaturaProduct = async (req, res) => {
    const natura = new naturaProductModel({
        name: req.body.name,
        image: req.file.filename,
        price: Number(req.body.price),
        category: req.body.category,
        quantity: Number(req.body.quantity),
        validity: req.body.validity
    });
    try {
        await natura.save();
        res.json({ success: true, message: "Produto Adicionado" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Erro ao adicionar o produto" });
    };
};

export const addNaturaKit = async (req, res) => {
    const natura = new naturaKitModel({
        nameOfProducts: req.body.nameOfProducts.split("//"),
        image: req.file.filename,
        price: Number(req.body.price),
        quantity: Number(req.body.quantity)
    });
    try {
        await natura.save();
        res.json({ success: true, message: "Kit Adicionado" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Erro ao adicionar o kit" });
    };
};

export const naturaProductList = async (_, res) => {
    try {
        const naturaProducts = await naturaProductModel.find({});
        res.json({ success: true, data: naturaProducts });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    };
};

export const naturaKitList = async (_, res) => {
    try {
        const naturaKits = await naturaKitModel.find({});
        res.json({ success: true, data: naturaKits });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Erro ao carregar os kits" });
    };
};

export const updateNaturaProduct = async (req, res) => {
    try {
        const product = await naturaProductModel.findById(req.params.id);
        const data = { ...req.body };

        if (req.file) {
            fs.unlink(`uploads/natura/${product.image}`, () => { });
            data.image = `${req.file.filename}`;
        };

        await naturaProductModel.findByIdAndUpdate(req.params.id, data);
        res.json({ success: true, message: "Produto Atualizado" });
        
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Erro ao atualizar o produto" });
    };
}

export const updateNaturaKit = async (req, res) => {
    try {
        const kit = await naturaKitModel.findById(req.params.id);
        const data = { ...req.body };

        if (req.file) {
            fs.unlink(`uploads/natura/${kit.image}`, () => { });
            data.image = `${req.file.filename}`;
        };

        if (req.body.nameOfProducts) data.nameOfProducts = req.body.nameOfProducts.split("//");
        await naturaKitModel.findByIdAndUpdate(req.params.id, data);

        res.json({ success: true, message: "Kit Atualizado" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Erro ao atualizar o kit" });
    };
};

export const deleteNaturaProduct = async (req, res) => {
    try {
        const product = await naturaProductModel.findById(req.params.id);
        fs.unlink(`uploads/natura/${product.image}`, () => { });
        await naturaProductModel.findByIdAndDelete(req.params.id);
        res.json({ success: true, message: "Produto Removido" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Falha ao remover o produto" });
    };
};

export const deleteNaturaKit = async (req, res) => {
    try {
        const kit = await naturaKitModel.findById(req.params.id);
        fs.unlink(`uploads/natura/${kit.image}`, () => { });
        await naturaKitModel.findByIdAndDelete(req.params.id);
        res.json({ success: true, message: "Kit Removido" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Falha ao remover o kit" });
    };
};