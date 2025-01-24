import mongoose from "mongoose";

const connectToMongoDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URL || "");
    console.log("Connected To MongoDB ^_^");
  } catch (err) {
    console.error("Connection failed to MongoDB!", err);
  }
};

export default connectToMongoDB;
