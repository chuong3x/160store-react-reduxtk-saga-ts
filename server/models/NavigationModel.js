import mongoose from 'mongoose';

const Navigation = new mongoose.Schema(
  {
    _id: {type: String, required:true},
    key: { type: String, required: true },
    title: { type: String, required: true },
    isDropDown: {type: Boolean, required: true},
    linkTo: {type: String, required: false},
    isActive: {type: Boolean, required: true},
  },
  { timestamps: true }
);

export const NavigationModel = mongoose.model('Navigation', Navigation);
