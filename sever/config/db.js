import mongoose from "mongoose";

const connectDb = async () => {
  mongoose.connection.on("connected", () => {
    console.log("Successfully connected to MongoDB");
  });
  await mongoose.connect(`${process.env.MONGO_URI}/bg-removal`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default connectDb;
