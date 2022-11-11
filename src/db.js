import { connect } from "mongoose";

export const connectDb = async () => {
  try {
    await connect("mongodb://localhost:27017/express-mongoose")
    console.log("Connected to database");
  } catch (error) {
    console.log(error)
  }
}