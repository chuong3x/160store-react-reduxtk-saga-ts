import { StoreModel } from "../models/LocationModel.js";

export const getStores = async (req, res) => {
  try {
    const stores = await StoreModel.find();
    const response = { data: stores };
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createStore = async (req, res) => {
  try {
    const newStore = req.body;
    const store = new StoreModel(newStore);
    await store.save();
    res.status(200).json(store);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const updateStore = async (req, res) => {
  try {
    const updateStore = req.body;
    const store = await StoreModel.findOneAndUpdate(
      { _id: updateStore._id },
      updateStore,
      { new: true }
    );
    res.status(200).json(store);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
