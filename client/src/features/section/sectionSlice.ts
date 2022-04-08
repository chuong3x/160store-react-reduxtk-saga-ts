import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";

import { Product, ListResponse, SectionProductsPayload } from "../../models";

interface sectionState {
  isLoading: boolean;
  data: { [name: string]: Product[] };
}

interface responseType {
  name: string;
  products: ListResponse<Product>;
}

const initialState: sectionState = {
  isLoading: false,
  data: {},
};

const sectionSlice = createSlice({
  name: "section",
  initialState,
  reducers: {
    getSectionProducts: (
      state,
      action: PayloadAction<SectionProductsPayload>
    ) => {
      state.isLoading = true;
    },
    getSectionProductsSuccess: (state, action: PayloadAction<responseType>) => {
      const newData = { [action.payload.name]: action.payload.products.data };
      state.data = { ...state.data, ...newData };
    },
    getSectionProductsFailed: (state) => {
      state.isLoading = false;
    },
  },
});

//Actions
export const sectionActions = sectionSlice.actions;

//Selector
export const selectSectionProducts = (state: RootState) => state.section.data;
export const selectSectionProductsLoading = (state: RootState) =>
  state.section.isLoading;

//Reducers
const sectionReducer = sectionSlice.reducer;
export default sectionReducer;
