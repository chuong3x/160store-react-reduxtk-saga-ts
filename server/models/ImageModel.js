import mongoose from "mongoose";
import mongooseSequence from "mongoose-sequence";

const AutoIncrement = mongooseSequence(mongoose);

const Image = new mongoose.Schema(
  {
    product_id: { type: Number, required: false },
    image_id: { type: String, required: true },
    src: { type: String, required: true },
  },
  { timestamps: true }
);

Image.plugin(AutoIncrement, { inc_field: "image_id" });

export const ImageModel = mongoose.model("Image", Image);
