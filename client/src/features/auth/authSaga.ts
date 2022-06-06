import { PayloadAction } from "@reduxjs/toolkit";
import loginApi from "api/loginApi";
import registerApi from "api/registerApi";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  authActions,
  LoginPayload,
  LoginResponse,
  RegisterPayload,
  RegisterResponse,
} from "./authSlice";

function* loginSaga(action: PayloadAction<LoginPayload>) {
  try {
    const response: LoginResponse = yield call(loginApi.login, action.payload);
    yield put(authActions.loginSuccess(response));
  } catch (error) {
    yield put(authActions.loginFailed(error.response.data.message));
  }
}

function* registerSaga(action: PayloadAction<RegisterPayload>) {
  try {
    const response: RegisterResponse = yield call(
      registerApi.register,
      action.payload
    );
    yield put(authActions.registerSuccess(response));
  } catch (error) {
    yield put(authActions.registerFailed(error.response.data.message));
  }
}

export default function* authSaga() {
  yield takeLatest(authActions.login, loginSaga);
  yield takeLatest(authActions.register, registerSaga);
}
