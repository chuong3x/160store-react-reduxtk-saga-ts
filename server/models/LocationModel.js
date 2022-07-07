import mongoose from "mongoose";

const storeSchema = new mongoose.Schema(
  {
    store_id: { type: String, required: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
  },
  { timestamps: true }
);

const locationSchema = new mongoose.Schema(
  {
    location_id: { type: String, required: true },
    name: { type: String, required: true },
    stores: [{ type: mongoose.Schema.Types.ObjectId, ref: "Store" }],
  },
  { timestamps: true }
);

export const StoreModel = mongoose.model("Store", storeSchema);

export const LocationModel = mongoose.model("Location", locationSchema);
