import mongoose from "mongoose";

const uri = "mongodb+srv://benalayafarouk5:OxjPsbUjrDwzO7uT@cluster0.bggbi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectToMongoDB = async (): Promise<void> => {
  try {
    await mongoose.connect(uri || "");
    console.log("Connected To MongoDB ^_^");
  } catch (err) {
    console.error("Connection failed to MongoDB!", err);
  }
};

export default connectToMongoDB;
