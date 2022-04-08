import { PayloadAction } from "@reduxjs/toolkit";
import getProductApi from "api/getProductApi";
import { ListParams, ListResponse, Product } from "models";
import { call, put, takeLatest } from "redux-saga/effects";
import { searchActions } from "./searchSlice";

function* getSearchSaga(action: PayloadAction<ListParams>) {
  try {
    const response: ListResponse<Product> = yield call(
      getProductApi.getAll,
      action.payload
    );
    yield put(searchActions.getSearchSuccess(response));
  } catch (err) {
    console.log("Failed to get search", err);
    yield put(searchActions.getSearchFailed());
  }
}
export default function* searchSaga() {
  yield takeLatest(searchActions.getSearch, getSearchSaga);
}
