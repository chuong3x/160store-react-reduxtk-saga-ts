import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { User } from "models";

export interface LoginPayload {
  username: string;
  password: string;
}

export interface SuccessResponse {
  message: string;
  token: string;
}

export interface RefreshPayload {
  token: string;
}

export interface RegisterData {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  phone?: string;
}

export interface RegisterPayload {
  method: string;
  registerData: RegisterData;
}

interface AuthState {
  isLoggedIn: boolean;
  logging?: boolean;
  registering: boolean;
  registerStatus: { status: string; message?: string };
  loginStatus: { status: string; message?: string };
  refreshing: boolean;
}

const initialState: AuthState = {
  isLoggedIn: Boolean(localStorage.getItem("accessToken")),
  logging: false,
  registering: false,
  registerStatus: { status: "", message: "" },
  loginStatus: { status: "", message: "" },
  refreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    checkIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    login: (state, action: PayloadAction<LoginPayload>) => {
      state.logging = true;
    },
    loginSuccess: (state, action: PayloadAction<SuccessResponse>) => {
      state.logging = false;
      localStorage.setItem("accessToken", action.payload.token);
      state.isLoggedIn = true;
      state.loginStatus = {
        status: "success",
        message: action.payload.message,
      };
    },
    loginFailed: (state, action: PayloadAction<string>) => {
      state.logging = false;
      state.loginStatus = {
        status: "failed",
        message: action.payload,
      };
    },
    refreshToken: (state, action: PayloadAction<RefreshPayload>) => {
      localStorage.setItem("accessToken", action.payload.token);
      state.refreshing = true;
    },
    refreshTokenSuccess: (state, action: PayloadAction<SuccessResponse>) => {
      localStorage.setItem("accessToken", action.payload.token);
      state.refreshing = false;
    },
    refreshTokenFailed: (state, action: PayloadAction<string>) => {
      localStorage.removeItem("accessToken");
      state.refreshing = false;
      state.isLoggedIn = false;
    },

    register: (state, action: PayloadAction<RegisterPayload>) => {
      state.registering = true;
    },
    registerSuccess: (state, action: PayloadAction<SuccessResponse>) => {
      localStorage.setItem("accessToken", action.payload.token);
      state.registering = false;
      state.registerStatus = {
        status: "success",
        message: action.payload.message,
      };
      state.isLoggedIn = true;
    },
    registerFailed: (state, action: PayloadAction<string>) => {
      state.registering = false;

      state.registerStatus = {
        status: "failed",
        message: action.payload,
      };
    },
    logout: (state, action: PayloadAction<User>) => {},
    logoutSuccess: (state, action: PayloadAction<string>) => {
      localStorage.removeItem("accessToken");
      state.isLoggedIn = false;
      state.loginStatus = {
        message: "",
        status: "success",
      };
    },
    logoutFailed: (state) => {},
  },
});

//Actions
export const authActions = authSlice.actions;

//Selector
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectLogging = (state: RootState) => state.auth.logging;
export const selectRegistering = (state: RootState) => state.auth.registering;
export const selectRegisterStatus = (state: RootState) =>
  state.auth.registerStatus;
export const selectLoginStatus = (state: RootState) => state.auth.loginStatus;
export const selectRefreshing = (state: RootState) => state.auth.refreshing;

//Reducers
const authReducer = authSlice.reducer;
export default authReducer;
