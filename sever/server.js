import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDb from "./config/db.js";
import userRouter from "./routes/userRoute.js";

//app config
const port = process.env.PORT || 4000;
const app = express();
await connectDb();

//initialised middleware
app.use(express.json());
app.use(cors());

//api route
app.get("/", (req, res) => {
  res.send("Home page");
});
app.use("/api/user", userRouter);
app.listen(port, () => {
  console.log(`server is running ${port}`);
});
