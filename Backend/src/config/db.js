import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MONGODB CONNECTED SUCCESFULLY!!!");
  } catch (error) {
    console.error("ERROR, db not connected ", error);
  }
};
export default connectDB;
