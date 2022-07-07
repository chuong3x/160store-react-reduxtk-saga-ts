import mongoose from "mongoose";
import mongooseSequence from "mongoose-sequence";

const AutoIncrement = mongooseSequence(mongoose);

const User = new mongoose.Schema(
  {
    user_id: { type: Number, required: false },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: false },
    phone: { type: String, required: false },
    address: { type: String, required: false },
    refreshTokens: { type: Array, required: false },
    password: { type: String, required: true },
    role: { type: String, required: true, default: "user" },
  },
  { timestamps: true }
);

User.plugin(AutoIncrement, { inc_field: "user_id" });

export const UserModel = mongoose.model("User", User);
