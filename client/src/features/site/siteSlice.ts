import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";

interface SiteState {
  isShow: boolean;
  showFor: string;
}

const initialState: SiteState = {
  isShow: false,
  showFor: "",
};

const siteSlice = createSlice({
  name: "site",
  initialState,
  reducers: {
    show: (state, action: PayloadAction<string>) => {
      state.showFor = action.payload;
      state.isShow = true;
    },
    hide: (state) => {
      state.isShow = false;
    },
  },
});

//Actions
export const siteActions = siteSlice.actions;

//Selector
export const selectSiteShow = (state: RootState) => state.site.isShow;
export const selectShowFor = (state: RootState) => state.site.showFor;

//Reducer
const siteReducer = siteSlice.reducer;
export default siteReducer;
