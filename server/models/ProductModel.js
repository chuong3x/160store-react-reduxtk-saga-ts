import mongoose from "mongoose";
import mongooseSequence from "mongoose-sequence";

const AutoIncrement = mongooseSequence(mongoose);

const Product = new mongoose.Schema(
  {
    product_id: { type: Number, required: false },
    brand: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true },
    photos: { type: Array, required: false },
    description: { type: String, required: false },
    rating: { type: Number, required: false },
    category: { type: String, required: true },
    product_link: { type: String, required: true },
    product_colors: { type: Array, required: false },
    product_sizes: { type: Array, required: false },
    product_code: { type: String, required: true },
    onSale: { type: Boolean, required: true },
    salePercent: { type: Number, required: true },
    collection_name: { type: String, required: false },
  },
  { timestamps: true }
);

Product.index({ name: "text" });
Product.plugin(AutoIncrement, { inc_field: "product_id" });

export const ProductModel = mongoose.model("Product", Product);
