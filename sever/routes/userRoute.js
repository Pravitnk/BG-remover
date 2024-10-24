import express from "express";
import {
  clerkWebhooks,
  paymentRazorpay,
  userCredits,
  verifyRazorpay,
} from "../controller/userController.js";
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
userRouter.post("/pay-razor", authUser, paymentRazorpay);
userRouter.post("/verify-razor", verifyRazorpay);

export default userRouter;
