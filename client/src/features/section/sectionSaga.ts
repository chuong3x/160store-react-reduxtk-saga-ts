import { PayloadAction } from "@reduxjs/toolkit";
import getProductApi from "api/getProductApi";
import { ListResponse, Product, SectionProductsPayload } from "models";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { sectionActions } from "./sectionSlice";

function* getSectionProducts(action: PayloadAction<SectionProductsPayload>) {
  try {
    const response: ListResponse<Product> = yield call(
      getProductApi.getByCategory,
      action.payload
    );
    yield put(
      sectionActions.getSectionProductsSuccess({
        name: action.payload.name,
        products: response,
      })
    );
  } catch (err) {
    console.log("Failed to get slides", err);
    yield put(sectionActions.getSectionProductsFailed());
  }
}

export default function* sectionProductsSaga() {
  yield takeEvery(sectionActions.getSectionProducts, getSectionProducts);
}
