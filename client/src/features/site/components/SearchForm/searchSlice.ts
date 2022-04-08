import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { ListParams, ListResponse, Product } from "models";

interface SearchState {
  isLoading: boolean;
  data: Product[];
}

const initialState: SearchState = {
  isLoading: false,
  data: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    getSearch: (state, action: PayloadAction<ListParams>) => {
      state.isLoading = true;
    },
    getSearchSuccess: (state, action: PayloadAction<ListResponse<Product>>) => {
      state.data = action.payload.data;
    },
    getSearchFailed: (state) => {
      state.isLoading = false;
    },
  },
});

//Actions
export const searchActions = searchSlice.actions;

//Selectors
export const selectSearch = (state: RootState) => state.search.data;
export const selectSearchLoading = (state: RootState) => state.search.isLoading;

//Reducer
const searchReducer = searchSlice.reducer;
export default searchReducer;
