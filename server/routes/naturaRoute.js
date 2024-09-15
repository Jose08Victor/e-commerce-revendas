import express from "express";
import { addNaturaProduct, naturaProductList, deleteNaturaProduct, updateNaturaProduct, addNaturaKit, naturaKitList, deleteNaturaKit, updateNaturaKit } from "../controllers/naturaController.js";
import multer from "multer";

const naturaRouter = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

naturaRouter.post("/addProduct", upload.single("image"), addNaturaProduct);
naturaRouter.post("/addKit", upload.single("image"), addNaturaKit);

naturaRouter.get("/productList", naturaProductList);
naturaRouter.get("/kitList", naturaKitList);

naturaRouter.put("/updateProduct/:id", upload.single("image"), updateNaturaProduct);
naturaRouter.put("/updateKit/:id", upload.single("image"), updateNaturaKit);

naturaRouter.delete("/deleteProduct/:id", deleteNaturaProduct);
naturaRouter.delete("/deleteKit/:id", deleteNaturaKit);

export default naturaRouter;