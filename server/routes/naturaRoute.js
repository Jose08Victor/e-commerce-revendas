import express from "express";
import { addNaturaProduct, naturaProductList, deleteNaturaProduct, updateNaturaProduct } from "../controllers/naturaController.js";
import multer from "multer";

const naturaRouter = express.Router();

//Image Storage Engine
const storage = multer.diskStorage({
    destination: "uploads/natura",
    filename: (_, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({ storage: storage })

naturaRouter.post("/add", upload.single("image"), addNaturaProduct);
naturaRouter.get("/list", naturaProductList);
naturaRouter.put("/update/:id", upload.single("image"), updateNaturaProduct);
naturaRouter.delete("/delete/:id", deleteNaturaProduct);

export default naturaRouter;