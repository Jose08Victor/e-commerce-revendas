import express from "express";
import { magazineDataList, updateMagazineData } from "../controllers/magazineDataController.js";
import multer from "multer";

const magazineDataRouter = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

magazineDataRouter.get("/get", magazineDataList);
magazineDataRouter.put("/update/:id", upload.single("image"), updateMagazineData);

export default magazineDataRouter;