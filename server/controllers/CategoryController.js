import { CategoryModel } from '../models/CategoryModel.js';

export const getCategories = async (req, res) => {
  try {
    const categories = await CategoryModel.find();
    console.log('categories', categories);
    const response = {data: categories}
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createCategory = async (req, res) => {
  try {
    const newCategory = req.body;
    const category = new CategoryModel(newCategory);
    await category.save();
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const updateCategory = req.body;
    const category = await CategoryModel.findOneAndUpdate(
      { _id: updateCategory._id },
      updateCategory,
      { new: true }
    );
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
