import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const DB = process.env.DATABASE;

const dbcoonnect = async () => {
  try {
    // await mongoose.connect(DB, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // });

    await mongoose.connect(DB)
    console.log("database connected suceesfully");
  } catch (error) {
    console.log("database not connected ");
  }
};

export default dbcoonnect