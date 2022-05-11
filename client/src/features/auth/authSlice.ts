import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { User } from "models/user";

export interface LoginPayload {
  username: string;
  password: string;
}

interface AuthState {
  isLoggedIn: boolean;
  logging?: boolean;
  currentUser?: User;
}

const initialState: AuthState = {
  isLoggedIn: false,
  logging: false,
  currentUser: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginPayload>) => {
      state.logging = true;
    },
    loginSuccess: (state, action: PayloadAction<User>) => {},
    loginFailed: (state, action: PayloadAction<string>) => {
      state.logging = false;
    },
  },
});

//Actions
export const authActions = authSlice.actions;

//Selector
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectLogging = (state: RootState) => state.auth.logging;

//Reducers
const authReducer = authSlice.reducer;
export default authReducer;
