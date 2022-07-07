import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";

const guideSlice = createSlice({
  name: "guide",
  initialState: { isShow: false, activeValue: "" },
  reducers: {
    show: (state, action: PayloadAction<string>) => {
      state.isShow = true;
      state.activeValue = action.payload;
    },
    hide: (state) => {
      state.isShow = false;
      state.activeValue = "";
    },
  },
});

//Actions
export const guideActions = guideSlice.actions;

//Selector
export const selectGuideShow = (state: RootState) => state.guide.isShow;
export const selectGuideActive = (state: RootState) => state.guide.activeValue;

//Reducer
const guideReducer = guideSlice.reducer;
export default guideReducer;
