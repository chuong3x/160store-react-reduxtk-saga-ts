import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";

import { Slide, ListResponse } from "../../models";

interface SliderState {
  isLoading: boolean;
  data: Slide[];
}
const initialState: SliderState = {
  isLoading: false,
  data: [],
};

const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
    getSlides: (state) => {
      state.isLoading = true;
    },
    getSlidesSuccess: (state, action: PayloadAction<ListResponse<Slide>>) => {
      state.data = action.payload.data;
      state.isLoading = false;
    },
    getSlidesFailed: (state) => {
      state.isLoading = false;
    },
  },
});

//Actions
export const sliderActions = sliderSlice.actions;

//Selector
export const selectSlides = (state: RootState) => state.slider.data;
export const selectSlidesLoading = (state: RootState) => state.slider.isLoading;

//Reducers
const sliderReducer = sliderSlice.reducer;
export default sliderReducer;
