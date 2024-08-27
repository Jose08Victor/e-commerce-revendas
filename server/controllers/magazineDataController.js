import { magazineDataModel } from "../models/magazineDataModel.js";
import fs from "fs";

export const magazineDataList = async (_, res) => {
    try {
        const magazineData = await magazineDataModel.find({});
        res.json({ success: true, data: magazineData });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    };
};

export const updateMagazineData = async (req, res) => {
    try {
        const magazineData = await magazineDataModel.findById(req.params.id);
        const data = { ...req.body };

        if (req.file && req.body.magazine === "avon") {
            fs.unlink(`uploads/magazineImage/${magazineData.avonMagazineImage}`, () => { });
            data.avonMagazineImage = `${req.file.filename}`;
        };

        if (req.file && req.body.magazine === "natura") {
            fs.unlink(`uploads/magazineImage/${magazineData.naturaMagazineImage}`, () => { });
            data.naturaMagazineImage = `${req.file.filename}`;
        };

        if (req.file && req.body.magazine === "casa&estilo") {
            fs.unlink(`uploads/magazineImage/${magazineData.casa_estiloMagazineImage}`, () => { });
            data.casa_estiloMagazineImage = `${req.file.filename}`;
        };

        await magazineDataModel.findByIdAndUpdate(req.params.id, data);

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Erro ao atualizar" });
    };

    res.json({ success: true, message: "Atualizado com sucesso" });
};