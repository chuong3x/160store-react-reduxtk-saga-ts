import getNavigationApi from "api/getNavigationApi";
import { Category, ListResponse } from "models";
import { call, put, takeLatest } from "redux-saga/effects";
import { menuActions } from "./menuSlice";

function* getCategory() {
  try {
    const response: ListResponse<Category> = yield call(
      getNavigationApi.getCategory
    );
    yield put(menuActions.getCategorySuccess(response));
  } catch (err) {
    console.log("Failed to get Navigation", err);
    yield put(menuActions.getCategoryFailed);
  }
}

export default function* menuSaga() {
  yield takeLatest(menuActions.getCategory, getCategory);
}
