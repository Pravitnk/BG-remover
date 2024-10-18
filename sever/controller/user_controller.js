import UserModel from "../models/user_model";

//api controller function to manage Clerk user with database
//http://localhost:4000/api/user/webhooks
const clerkWebhooks = async (req, res) => {
  const { email } = req.body;

  const user = UserModel.findOne({ email: email });
};

export default clerkWebhooks;
