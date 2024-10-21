// import UserModel from "../models/user_model.js";
// import { Webhook } from "svix";

//api controller function to manage Clerk user with database
//http://localhost:4000/api/user/webhooks
const clerkWebhooks = async (req, res) => {
  // try {
  //   const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
  //   await whook.verify(JSON.stringify(req.body), {
  //     "svix-id": req.header["svix-id"],
  //     "svix-timestamp": req.header["svix-timestamp"],
  //     "svix-signature": req.header["svix-signature"],
  //   });
  //   const { data, type } = req.body;
  //   switch (type) {
  //     case "user-created": {
  //       const userData = {
  //         clerkId: data.id,
  //         email: data.email_addresses[0].email_address,
  //         firstName: data.first_name,
  //         lastName: data.last_name,
  //         photo: data.image_url,
  //       };
  //       await UserModel.create(userData);
  //       res.json({});
  //       break;
  //     }
  //     case "user-updated": {
  //       const userData = {
  //         email: data.email_addresses[0].email_address,
  //         firstName: data.first_name,
  //         lastName: data.last_name,
  //         photo: data.image_url,
  //       };
  //       await UserModel.findOneAndUpdate({ clerkId: data.id }, userData);
  //       res.json({});
  //       break;
  //     }
  //     case "user-deleted": {
  //       await UserModel.findOneAndDelete({ clerkId: data.id });
  //       res.json({});
  //       break;
  //     }
  //     default:
  //       break;
  //   }
  // } catch (error) {
  //   console.error(error.message);
  //   res.json({
  //     success: false,
  //     message: error.message,
  //   });
  // }
};

export { clerkWebhooks };
