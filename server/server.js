import { connectDB } from "./config/db.js";
import express from "express";
import cors from "cors";
import "dotenv/config"
import avonRouter from "./routes/avonRoute.js";
import naturaRouter from "./routes/naturaRoute.js";

//app config
 const app = express();
 const port = 4000;

//middleware
app.use(express.json());
app.use(cors());

//db connection
connectDB();

//API endpoints
app.use("/api/avon", avonRouter)
app.use("/images/avon", express.static('uploads/avon'))
app.use("/api/natura", naturaRouter)
app.use("/images/natura", express.static('uploads/natura'))

app.get("/", (_, res) => {
    res.send("API Working")
})

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`);
})