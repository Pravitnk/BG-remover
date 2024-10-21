import express from "express";
import { clerkWebhooks } from "../controller/user_controller";

const app = express.Router();

app.post("/webhhoks", clerkWebhooks);
