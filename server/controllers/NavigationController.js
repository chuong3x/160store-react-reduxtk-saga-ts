import { NavigationModel } from '../models/NavigationModel.js';

export const getNavigations = async (req, res) => {
  try {
    const navigations = await NavigationModel.find();
    console.log('navigations', navigations);
    const response = {data: navigations}
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createNavigation = async (req, res) => {
  try {
    const newNavigation = req.body;
    const navigation = new NavigationModel(newNavigation);
    await navigation.save();
    res.status(200).json(navigation);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const updateNavigation = async (req, res) => {
  try {
    const updateNavigation = req.body;
    const navigation = await NavigationModel.findOneAndUpdate(
      { _id: updateNavigation._id },
      updateNavigation,
      { new: true }
    );
    res.status(200).json(navigation);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
