import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { Category, ListResponse } from "../../models";

interface MenuState {
  isLoading: boolean;
  data: Category[];
}
const initialState: MenuState = {
  isLoading: false,
  data: [],
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    getCategory: (state) => {
      state.isLoading = true;
    },
    getCategorySuccess: (
      state,
      action: PayloadAction<ListResponse<Category>>
    ) => {
      state.data = action.payload.data;
    },
    getCategoryFailed: (state) => {
      state.isLoading = false;
    },
  },
});

// Actions
export const menuActions = menuSlice.actions;

//Selector
export const selectMenu = (state: RootState) => state.menu.data;
export const selectMenuLoading = (state: RootState) => state.menu.isLoading;

//Reducers
const menuReducer = menuSlice.reducer;
export default menuReducer;
