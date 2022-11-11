import { connect } from "mongoose";
import { MONGO_URI_DEV } from "./config";

export const connectDb = async () => {
  try {
    await connect(MONGO_URI_DEV)
    console.log("Connected to database");
  } catch (error) {
    console.log(error)
  }
}