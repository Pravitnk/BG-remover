// models/user.js

import mongoose from "mongoose";

// Define the user schema
const userSchema = new mongoose.Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    // lowercase: true,
  },
  photo: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  creditBalance: {
    type: Number,
    dafault: 5,
  },
});

// Create a model from the schema and export it
const userModel = mongoose.model.user || mongoose.model("User", userSchema);
export default userModel;
