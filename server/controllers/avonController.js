import { avonProductModel, avonKitModel } from "../models/avonModel.js";
import { deleteImage, imageHandler } from "../middlewares/index.js";

export const addAvonProduct = async (req, res) => {
    try {
        const { newName, url } = await imageHandler(req.file, "images/avon/products/");

        const avon = new avonProductModel({
            name: req.body.name,
            imageName: newName,
            imageURL: url,
            price: Number(req.body.price),
            category: req.body.category,
            quantity: Number(req.body.quantity),
            validity: req.body.validity
        });

        await avon.save();
        res.json({ success: true, message: "Produto Adicionado" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Erro ao adicionar o produto" });
    }
};

export const addAvonKit = async (req, res) => {
    try {
        const { newName, url } = await imageHandler(req.file, "images/avon/kits/");

        const avon = new avonKitModel({
            nameOfProducts: req.body.nameOfProducts.split("//"),
            imageName: newName,
            imageURL: url,
            price: Number(req.body.price),
            quantity: Number(req.body.quantity)
        });

        await avon.save();
        res.json({ success: true, message: "Kit Adicionado" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Erro ao adicionar o kit" });
    };
};

export const avonProductList = async (_, res) => {
    try {
        const avonProducts = await avonProductModel.find({});
        res.json({ success: true, data: avonProducts });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Erro ao carregar os produtos" });
    };
};

export const avonKitList = async (_, res) => {
    try {
        const avonKits = await avonKitModel.find({});
        res.json({ success: true, data: avonKits });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Erro ao carregar os kits" });
    };
};

export const updateAvonProduct = async (req, res) => {
    try {
        const product = await avonProductModel.findById(req.params.id);
        const data = { ...req.body };

        if (req.file) {
            await deleteImage(product.imageName, "images/avon/products/");
            const { newName, url } = await imageHandler(req.file, "images/avon/products/");

            data.imageName = newName;
            data.imageURL = url;
        };

        await avonProductModel.findByIdAndUpdate(req.params.id, data);
        res.json({ success: true, message: "Produto Atualizado" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Erro ao atualizar o produto" });
    };
};

export const updateAvonKit = async (req, res) => {
    try {
        const kit = await avonKitModel.findById(req.params.id);
        const data = { ...req.body };

        if (req.file) {
            await deleteImage(kit.imageName, "images/avon/kits/");
            const { newName, url } = await imageHandler(req.file, "images/avon/kits/");

            data.imageName = newName;
            data.imageURL = url;
        };

        if (req.body.nameOfProducts) data.nameOfProducts = req.body.nameOfProducts.split("//");
        await avonKitModel.findByIdAndUpdate(req.params.id, data);

        res.json({ success: true, message: "Kit Atualizado" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Erro ao atualizar o kit" });
    };
};

export const deleteAvonProduct = async (req, res) => {
    try {
        const product = await avonProductModel.findById(req.params.id);
        await deleteImage(product.imageName, "images/avon/products/");

        await avonProductModel.findByIdAndDelete(req.params.id);
        res.json({ success: true, message: "Produto Removido" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Falha ao remover o produto" });
    };
};

export const deleteAvonKit = async (req, res) => {
    try {
        const kit = await avonKitModel.findById(req.params.id);
        await deleteImage(kit.imageName, "images/avon/kits/");
        await avonKitModel.findByIdAndDelete(req.params.id);

        res.json({ success: true, message: "Kit Removido" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Falha ao remover o kit" });
    };
};