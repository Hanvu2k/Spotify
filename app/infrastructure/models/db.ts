import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

class MongooseSingleton {
  private static _instance?: mongoose.Mongoose;

  private constructor() {}

  public static getInstance(): mongoose.Mongoose {
    if (!MongooseSingleton._instance) {
      mongoose
        .connect(process.env.MONGO_CONNECTSTRING!, {
          user: process.env.MONGO_USER,
          pass: process.env.MONGO_PASSWORD,
        })
        .then(() => console.log("Connected to MongoDB"))
        .catch((err) => console.error("Error connecting to MongoDB:", err));

      MongooseSingleton._instance = mongoose;
    }

    return MongooseSingleton._instance;
  }
}

// Usage
const mongooseInstance = MongooseSingleton.getInstance();
export default mongooseInstance;
