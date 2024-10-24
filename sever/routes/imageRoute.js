import express from "express";
import { removeBgImage } from "../controller/imageController.js";
import upload from "../middlewares/multer.js";
import authUser from "../middlewares/auth.js";

const router = express.Router();

router.post("/remove-bg", upload.single("image"), authUser, removeBgImage);

export default router;
