import axios from "axios";
import fs from "fs";
import formData from "form-data";
import userModel from "../models/userModel.js";

//controller function to remove background from image
const removeBgImage = async (req, res) => {
  try {
    const { clerkId } = req.body;
    const user = await userModel.findOne({ clerkId });
    if (!user) {
      return res
        .status(404)
        .json({ suceess: false, message: "User not found..." });
    }

    if (user.creditBalance === 0) {
      return res.json({
        suceess: false,
        message: "Insufficient credit balance...",
        creditBalance: user.creditBalance,
      });
    }

    const imagePath = req.file.path;

    //reading the image file
    const imageFile = fs.createReadStream(imagePath);

    //creating form-data object
    const formdata = new formData();
    formdata.append("image_file", imageFile);

    const { data } = await axios.post(
      "https://clipdrop-api.co/remove-background/v1",
      formdata,
      {
        headers: {
          "x-api-key": process.env.CLIPDROP_API_KEY,
        },
        responseType: "arraybuffer",
      }
    );

    const base64Image = Buffer.from(data, "binary").toString("base64");

    const resultImage = `data:${req.file.mimetype};base64,${base64Image}`;

    //deduct the credit
    await userModel.findOneAndUpdate(user._id, {
      creditBalance: user.creditBalance - 1,
    });

    res.json({
      success: true,
      resultImage,
      creditBalance: user.creditBalance - 1,
      message: "Background removed",
    });
  } catch (error) {
    console.error("err", error.message);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export { removeBgImage };