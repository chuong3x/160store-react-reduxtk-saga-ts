import mongoose from 'mongoose';

const Category = new mongoose.Schema(
  {
    _id: {type: String, required:true},
    name: { type: String, required: true },
    data: {type: Array, required: false}
  },
  { timestamps: true }
);

export const CategoryModel = mongoose.model('Category', Category);
