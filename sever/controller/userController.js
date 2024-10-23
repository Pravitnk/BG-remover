import { Webhook } from "svix";
import userModel from "../models/userModel.js";
import express from "express";
import bodyParser from "body-parser";
//api controller function to manage Clerk user with database
//http://localhost:4000/api/user/webhooks
// const clerkWebhooks = async (req, res) => {
//   console.log("11");

//   try {
//     const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
//     await whook.verify(JSON.stringify(req.body), {
//       "svix-id": req.headers["svix-id"],
//       "svix-timestamp": req.headers["svix-timestamp"],
//       "svix-signature": req.headers["svix-signature"],
//     });
//     const { data, type } = req.body;
//     console.log("Webhook Body:", data);

//     switch (type) {
//       case "user.created": {
//         const userData = {
//           clerkId: data.id,
//           email: data.email_addresses[0].email_address,
//           firstName: data.first_name,
//           lastName: data.last_name,
//           photo: data.image_url,
//         };

//         await userModel.create(userData);
//         res.json({});
//         break;
//       }

//       case "user.updated": {
//         const userData = {
//           email: data.email_addresses[0].email_address,
//           firstName: data.first_name,
//           lastName: data.last_name,
//           photo: data.image_url,
//         };

//         await userModel.findOneAndUpdate({ clerkId: data.id }, userData);
//         res.json({});

//         break;
//       }

//       case "user.deleted": {
//         await userModel.findOneAndDelete({ clerkId: data.id });
//         res.json({});

//         break;
//       }

//       default:
//         break;
//     }
//   } catch (error) {
//     console.error(error.message);
//     res.json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

const app = express();

// Set up raw body for webhook routes
app.use("/api/user/webhooks", bodyParser.raw({ type: "application/json" }));
const clerkWebhooks = async (req, res) => {
  try {
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };
    console.log("svix-id:", req.headers["svix-id"]);
    console.log("svix-timestamp:", req.headers["svix-timestamp"]);
    console.log("svix-signature:", req.headers["svix-signature"]);

    // Use the raw body here
    await whook.verify(req.body, headers);

    const { data, type } = JSON.parse(req.body);
    console.log("Webhook verified, type:", type);

    // Proceed with the rest of the logic
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error verifying webhook:", error.message);
    res.status(400).json({ success: false, message: error.message });
  }
};

// api controller function to get user available credits data

const userCredits = async (req, res) => {
  try {
    const { clerkId } = req.body;
    const userData = await userModel.findById({ clerkId });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res.json({ success: true, credits: userData.creditBalance });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export { clerkWebhooks, userCredits };