import express from "express";
import { addAvonKit, addAvonProduct, avonKitList, avonProductList, deleteAvonKit, deleteAvonProduct, updateAvonKit, updateAvonProduct } from "../controllers/avonController.js";
import multer from "multer";

const avonRouter = express.Router();

const storage = multer.memoryStorage();
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