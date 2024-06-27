import mongooseInstance from "~/infrastructure/models/db";
import mongoose, { Schema } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// model
const TaskSchema = new Schema(
  {
    name: { type: String, required: true },
    status: {
      type: String,
      enum: ["new", "doing", "completed"],
      required: true,
    },
  },
  { timestamps: true }
);

// connect to db
mongooseInstance.connect(process.env.MONGO_CONNECTSTRING!, {
  user: process.env.MONGO_USER,
  pass: process.env.MONGO_PASSWORD,
});

export const TaskModel =
  mongoose.models.Task || mongoose.model("Task", TaskSchema);
