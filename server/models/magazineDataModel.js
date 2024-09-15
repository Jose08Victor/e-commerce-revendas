import mongoose from "mongoose";

const magazineDataSchema = new mongoose.Schema({
    currentCycle: { type: Number, required: true },
    startOfCycle: { type: String, required: true },
    endOfCycle: { type: String, required: true },
    avonMagazineImageName: { type: String, required: true },
    avonMagazineImageURL: { type: String, required: true },
    avonMagazineLink: { type: String, required: true },
    casa_estiloMagazineImageName: { type: String, required: true },
    casa_estiloMagazineImageURL: { type: String, required: true },
    casa_estiloMagazineLink: { type: String, required: true },
    naturaMagazineImageName: { type: String, required: true },
    naturaMagazineImageURL: { type: String, required: true },
    naturaMagazineLink: { type: String, required: true },
});

export const magazineDataModel = mongoose.models.magazineData || mongoose.model("magazineData", magazineDataSchema);