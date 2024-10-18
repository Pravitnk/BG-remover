import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDb from "./config/db.js";

//app config
const port = process.env.PORT || 4000;
const app = express();
await connectDb();

//initialised middleware
app.use(express.json);
app.use(cors());

//api route
app.get("/", (req, res) => {
  res.send("Home page");
});
app.listen(port, () => {
  console.log(`server is running ${port}`);
});
