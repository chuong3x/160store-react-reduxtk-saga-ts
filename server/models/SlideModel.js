import mongoose from 'mongoose';

const Slide = new mongoose.Schema(
  {
    linkTo: {type: String, required: true},
    image: {type: String, required: true},
    
  },
  { timestamps: true }
);

export const SlideModel = mongoose.model('Slide', Slide);
