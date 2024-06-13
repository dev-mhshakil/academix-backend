import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

dotenv.config();

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(`\n MongoDB Connected : ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("MongoDB connect error: ", error);
    process.exit(1);
  }
};

export default connectDB;
