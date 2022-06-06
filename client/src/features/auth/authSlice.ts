import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { ValidateRegister } from "utils/validation";

export interface LoginPayload {
  username: string;
  password: string;
}

export interface LoginResponse {
  message: string;
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

export interface RegisterResponse {
  message: string;
  token: string;
}

interface AuthState {
  isLoggedIn: boolean;
  logging?: boolean;
  registering: boolean;
  registerStatus: { status: string; message?: string };
  loginStatus: { status: string; message?: string };
}

const initialState: AuthState = {
  isLoggedIn: false,
  logging: false,
  registering: false,
  registerStatus: { status: "", message: "" },
  loginStatus: { status: "", message: "" },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginPayload>) => {
      state.logging = true;
    },
    loginSuccess: (state, action: PayloadAction<LoginResponse>) => {
      localStorage.setItem("accessToken", action.payload.token);
      state.logging = false;
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
    register: (state, action: PayloadAction<RegisterPayload>) => {
      state.registering = true;
    },
    registerSuccess: (state, action: PayloadAction<RegisterResponse>) => {
      localStorage.setItem("accessToken", action.payload.token);
      state.registering = false;
      state.registerStatus = {
        status: "success",
        message: action.payload.message,
      };
    },
    registerFailed: (state, action: PayloadAction<string>) => {
      state.registering = false;
      state.registerStatus = {
        status: "failed",
        message: action.payload,
      };
    },
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

//Reducers
const authReducer = authSlice.reducer;
export default authReducer;
