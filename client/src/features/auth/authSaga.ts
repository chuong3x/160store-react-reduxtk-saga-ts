import { PayloadAction } from "@reduxjs/toolkit";
import { takeLatest } from "redux-saga/effects";
import { authActions, LoginPayload } from "./authSlice";

function* loginSaga(action: PayloadAction<LoginPayload>) {
  yield console.log("authOK");
}

export default function* authSaga() {
  yield takeLatest(authActions.login, loginSaga);
}
