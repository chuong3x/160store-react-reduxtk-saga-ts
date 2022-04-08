import { call, put, takeLatest } from "redux-saga/effects";
import getNavigationApi from "api/getNavigationApi";
import { ListResponse, Navigation } from "models";
import { navigationActions } from "./navigationSlice";

function* getNavigation() {
  try {
    const response: ListResponse<Navigation> = yield call(
      getNavigationApi.getAll
    );
    yield put(navigationActions.getNavigationSuccess(response));
  } catch (error) {
    console.log("Failed to get Navigation", error);
    yield put(navigationActions.getNavigationFailed());
  }
}

//Export navigation
export default function* navigationSaga() {
  yield takeLatest(navigationActions.getNavigation, getNavigation);
}
