import mongoose from 'mongoose';

const Product = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    brand: {type: String, required: true},
    name: { type: String, required: true },
    price: {type: String, required: true},
    image: {type: String, required: true},
    description: {type: String, required: false},
    rating: {type:Number, required: false},
    category: {type:String, required: true},
    product_link: {type: String, required: true},
    product_color: {type: Array, required: false},
    product_code: {type: String, required: true},
    onSale: {type: Boolean, required: true},
    salePercent: {type: Number, required: true},
    collection_name: {type: String, required: false},
  },
  { timestamps: true }
);

export const ProductModel = mongoose.model('Product', Product);
