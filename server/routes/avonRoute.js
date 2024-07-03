import express from "express";
import { addAvonProduct, avonProductList, deleteAvonProduct, updateAvonProduct } from "../controllers/avonController.js";
import multer from "multer";

const avonRouter = express.Router();

//Image Storage Engine
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (_, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({ storage: storage })

avonRouter.post("/add", upload.single("image"), addAvonProduct);
avonRouter.get("/list", avonProductList);
avonRouter.put("/update/:id", upload.single("image"), updateAvonProduct);
avonRouter.delete("/delete/:id", deleteAvonProduct);

export default avonRouter;