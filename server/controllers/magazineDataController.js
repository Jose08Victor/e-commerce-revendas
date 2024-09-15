import { magazineDataModel } from "../models/magazineDataModel.js";
import { deleteImage, imageHandler } from "../middlewares/index.js";

export const magazineDataList = async (_, res) => {
    try {
        const magazineData = await magazineDataModel.find({});
        res.json({ success: true, data: magazineData });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Erro ao carregar as revistas" });
    };
};

export const updateMagazineData = async (req, res) => {
    try {
        const magazineData = await magazineDataModel.findById(req.params.id);
        const data = { ...req.body };

        if (req.file && req.body.magazine === "avon") {
            await deleteImage(magazineData.avonMagazineImageName, "images/magazines/");
            const { newName, url } = await imageHandler(req.file, "images/magazines/");

            data.avonMagazineImageName = newName;
            data.avonMagazineImageURL = url;
        };

        if (req.file && req.body.magazine === "natura") {
            await deleteImage(magazineData.naturaMagazineImageName, "images/magazines/");
            const { newName, url } = await imageHandler(req.file, "images/magazines/");

            data.naturaMagazineImageName = newName;
            data.naturaMagazineImageURL = url;
        };

        if (req.file && req.body.magazine === "casa&estilo") {
            await deleteImage(magazineData.casa_estiloMagazineImageName, "images/magazines/");
            const { newName, url } = await imageHandler(req.file, "images/magazines/");

            data.casa_estiloMagazineImageName = newName;
            data.casa_estiloMagazineImageURL = url;
        };

        await magazineDataModel.findByIdAndUpdate(req.params.id, data);
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Erro ao atualizar" });
    };

    res.json({ success: true, message: "Atualizado com sucesso" });
};