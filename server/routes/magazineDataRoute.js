import express from "express";
import { magazineDataList, updateMagazineData } from "../controllers/magazineDataController.js";
import multer from "multer";

const magazineDataRouter = express.Router();

//Image Storage Engine
const storage = multer.diskStorage({
    destination: "uploads/magazineImage",
    filename: (_, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

magazineDataRouter.get("/get", magazineDataList);
magazineDataRouter.put("/update/:id", upload.single("image"), updateMagazineData);

export default magazineDataRouter;