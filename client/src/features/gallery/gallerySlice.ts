import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { GalleryPayload } from "components/Common/Gallery";
import { Image } from "models";

interface GalleryState {
  isShow: boolean;
  images: Image[];
  currentIndex: number;
}

const initialState: GalleryState = {
  isShow: false,
  images: [],
  currentIndex: 0,
};

const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    show: (state, action: PayloadAction<GalleryPayload>) => {
      state.images = action.payload.images;
      state.currentIndex = action.payload.currentIndex;
      state.isShow = true;
    },
    hide: (state) => {
      state.isShow = false;
    },
  },
});

export const galleryActions = gallerySlice.actions;

export const selectGalleryModalIsShow = (state: RootState) =>
  state.gallery.isShow;
export const selectGalleryImages = (state: RootState) => state.gallery.images;
export const selectGalleryCurrentImage = (state: RootState) =>
  state.gallery.currentIndex;

const galleryReducer = gallerySlice.reducer;
export default galleryReducer;
