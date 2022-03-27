import mongoose from 'mongoose';

const Product = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    name: { type: String, required: true },
    image: {type: String, required: true}
  },
  { timestamps: true }
);

export const ProductModel = mongoose.model('Product', Product);
