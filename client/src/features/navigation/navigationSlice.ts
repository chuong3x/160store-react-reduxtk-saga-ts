import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { Navigation, ListResponse } from "../../models";

interface NavigationState {
  loading: boolean;
  data: Navigation[];
}
const initialState: NavigationState = {
  loading: false,
  data: [],
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    getNavigation: (state) => {
      state.loading = true;
    },
    getNavigationSuccess: (
      state,
      action: PayloadAction<ListResponse<Navigation>>
    ) => {
      state.data = action.payload.data;
    },
    getNavigationFailed: (state) => {
      state.loading = false;
    },
  },
});

//Actions
export const navigationActions = navigationSlice.actions;

//Selector
export const selectNavigation = (state: RootState) => state.navigation.data;
export const selectNavigationLoading = (state: RootState) =>
  state.navigation.loading;

//Reducers
const navigationReducer = navigationSlice.reducer;
export default navigationReducer;
