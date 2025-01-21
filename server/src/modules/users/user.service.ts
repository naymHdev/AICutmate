import mongoose, { Schema } from "mongoose";
import { TUser } from "./user.interface";

const userSchema = new Schema<TUser>({
  clerkId: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  photo: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  creditBalance: {
    type: Number,
    default: 5,
  },
});

export const userModel = mongoose.model<TUser>("userModel", userSchema);
