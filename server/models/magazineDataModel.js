import mongoose from "mongoose";

const magazineDataSchema = new mongoose.Schema({
    currentCycle: { type: Number, required: true },
    startOfCycle: { type: String, required: true },
    endOfCycle: { type: String, required: true },
    avonMagazineImage: { type: String, required: true },
    avonMagazineLink: { type: String, required: true },
    casa_estiloMagazineImage: { type: String, required: true },
    casa_estiloMagazineLink: { type: String, required: true },
    naturaMagazineImage: { type: String, required: true },
    naturaMagazineLink: { type: String, required: true },
});

export const magazineDataModel = mongoose.models.magazineData || mongoose.model("magazineData", magazineDataSchema);