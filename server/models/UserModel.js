import mongoose from 'mongoose';

const User = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: {type: String, required: true},
    phone: {type: String, required: false},
    address: {type: String, required: false},
    token: {type: Array, required: false},
    password: {type: String, required: true}
  },
  { timestamps: true }
);

User.index({ "name": "text"})

export const UserModel = mongoose.model('User', User);