import { PayloadAction } from "@reduxjs/toolkit";
import loginApi from "api/loginApi";
import logoutApi from "api/logoutApi";
import registerApi from "api/registerApi";
import { User } from "models";
import { call, put, takeLatest, fork, take } from "redux-saga/effects";
import {
  authActions,
  LoginPayload,
  SuccessResponse,
  RegisterPayload,
  RefreshPayload,
} from "./authSlice";

function* loginSaga(payload: LoginPayload) {
  try {
    const response: SuccessResponse = yield call(loginApi.login, payload);
    yield put(authActions.loginSuccess(response));
  } catch (error) {
    yield put(authActions.loginFailed(error.response.data.message));
  }
}

function* refreshSaga(action: PayloadAction<RefreshPayload>) {
  try {
    const response: SuccessResponse = yield call(
      loginApi.refreshToken,
      action.payload
    );
    yield put(authActions.refreshTokenSuccess(response));
  } catch (error) {
    yield put(authActions.refreshTokenFailed(error.response.data.message));
  }
}

function* registerSaga(action: PayloadAction<RegisterPayload>) {
  try {
    const response: SuccessResponse = yield call(
      registerApi.register,
      action.payload
    );
    yield put(authActions.registerSuccess(response));
  } catch (error) {
    yield put(authActions.registerFailed(error.response.data.message));
  }
}

function* logoutSaga(payload: User) {
  try {
    const response: any = yield call(logoutApi.logout, payload);
    yield put(authActions.logoutSuccess(response));
  } catch {
    yield put(authActions.logoutFailed());
  }
}

function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = Boolean(localStorage.getItem("accessToken"));
    if (!isLoggedIn) {
      const action: PayloadAction<LoginPayload> = yield take(
        authActions.login.type
      );
      yield call(loginSaga, action.payload);
    }
    const logoutAction: PayloadAction<User> = yield take(
      authActions.logout.type
    );
    yield call(logoutSaga, logoutAction.payload);
  }
}

export default function* authSaga() {
  yield fork(watchLoginFlow);
  yield takeLatest(authActions.register, registerSaga);
  yield takeLatest(authActions.refreshToken, refreshSaga);
}
