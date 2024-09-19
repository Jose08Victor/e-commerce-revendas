import { connectDB } from "./config/db.js";
import express from "express";
import cors from "cors";
import "dotenv/config";
import avonRouter from "./routes/avonRoute.js";
import naturaRouter from "./routes/naturaRoute.js";
import magazineDataRouter from "./routes/magazineDataRoute.js";

//app config
const app = express();
const port = process.env.PORT || 4000;

//middleware
app.use(express.json());
app.use(cors());

//db connection
connectDB();

//API endpoints
app.use("/api/avon", avonRouter);
app.use("/api/natura", naturaRouter);
app.use("/api/magazineData", magazineDataRouter);

app.get("/", (_, res) => res.send("API Working"));

app.listen(port, () => console.log(`app listening on port ${port}`));