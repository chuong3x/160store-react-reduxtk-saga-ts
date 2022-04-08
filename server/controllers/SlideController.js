import { SlideModel } from '../models/SlideModel.js';

export const getSlides = async (req, res) => {
  const query = req.query;
  try {
    const slides = await SlideModel.find({"name" : new RegExp(query._filter, 'i') });
    res.status(200).json({data: slides});
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// export const createSlide = async (req, res) => {
//   try {
//     const newSlide = req.body;
//     const slide = new SlideModel(newSlide);
//     await slide.save();
//     res.status(200).json(slide);
//   } catch (err) {
//     res.status(500).json({ error: err });
//   }
// };

// export const updateSlide = async (req, res) => {
//   try {
//     const updateSlide = req.body;
//     const slide = await SlideModel.findOneAndUpdate(
//       { _id: updateSlide._id },
//       updateSlide,
//       { new: true }
//     );
//     res.status(200).json(slide);
//   } catch (err) {
//     res.status(500).json({ error: err });
//   }
// };

export const updateSlide = async (req, res) => {
  try {
    const slides = await SlideModel.updateMany({},  {$set:{"slide_code": "XÁM WASH-0080 / S"}});

    res.status(200).json(slides);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createSlide = async (req, res) => {
  try {
    const newSlide = {image: 'https://res.cloudinary.com/hanco3x/image/upload/v1648826671/106store/slider-background/slideshow_2_xo6fmb.webp', linkTo: '/'};
    const slide = new SlideModel(newSlide);
    await slide.save();
    res.status(200).json(slide);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};