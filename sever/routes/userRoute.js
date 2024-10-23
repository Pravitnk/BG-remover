import express from "express";
import { clerkWebhooks, userCredits } from "../controller/userController.js";
import authUser from "../middlewares/auth.js";
import bodyParser from "body-parser";

const userRouter = express.Router();

// userRouter.post("/webhooks", clerkWebhooks);
userRouter.post(
  "/webhooks",
  bodyParser.raw({ type: "application/json" }),
  clerkWebhooks
);

userRouter.get("/credits", authUser, userCredits);

export default userRouter;
