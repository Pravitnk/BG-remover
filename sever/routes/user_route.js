import express from "express";
import { clerkWebhooks } from "../controller/user_controller.js";

const userRouter = express.Router();

userRouter.post("/webhooks", clerkWebhooks);

export default userRouter;
