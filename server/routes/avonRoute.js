import express from "express";
import { addAvonKit, addAvonProduct, avonKitList, avonProductList, deleteAvonKit, deleteAvonProduct, updateAvonKit, updateAvonProduct } from "../controllers/avonController.js";
import multer from "multer";

const avonRouter = express.Router();

//Image Storage Engine
const storage = multer.diskStorage({
    destination: "uploads/avon",
    filename: (_, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

avonRouter.post("/addProduct", upload.single("image"), addAvonProduct);
avonRouter.post("/addKit", upload.single("image"), addAvonKit);

avonRouter.get("/productList", avonProductList);
avonRouter.get("/kitList", avonKitList);

avonRouter.put("/updateProduct/:id", upload.single("image"), updateAvonProduct);
avonRouter.put("/updateKit/:id", upload.single("image"), updateAvonKit);

avonRouter.delete("/deleteProduct/:id", deleteAvonProduct);
avonRouter.delete("/deleteKit/:id", deleteAvonKit);

export default avonRouter;