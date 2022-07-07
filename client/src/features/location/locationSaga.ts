import getLocationApi from "api/getLocations";
import { ListResponse, Location } from "models";
import { call, put, takeLatest } from "redux-saga/effects";
import { locationActions } from "./locationSlice";

function* getLocationSaga() {
  try {
    const response: ListResponse<Location> = yield call(getLocationApi.getAll);
    yield put(locationActions.getLocationSuccess(response));
  } catch (error) {
    yield put(locationActions.getLocationFailed());
  }
}

export default function* locationSaga() {
  yield takeLatest(locationActions.getLocations, getLocationSaga);
}
