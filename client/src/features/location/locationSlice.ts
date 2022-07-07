import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { ListResponse } from "models";
import { Location } from "models";

interface LocationState {
  data: Location[];
  message: "success" | "failed" | "idle";
}

const initialState: LocationState = {
  data: [],
  message: "idle",
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    getLocations: (state) => {},
    getLocationSuccess: (
      state,
      action: PayloadAction<ListResponse<Location>>
    ) => {
      state.data = action.payload.data;
      state.message = "success";
    },
    getLocationFailed: (state) => {
      state.message = "failed";
    },
  },
});

//Actions
export const locationActions = locationSlice.actions;

//Selector
export const selectLocations = (state: RootState) => state.location.data;
export const selectLocationMessage = (state: RootState) =>
  state.location.message;
//Reducer
const locationReducer = locationSlice.reducer;
export default locationReducer;
