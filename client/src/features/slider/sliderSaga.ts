import getSlidesApi from "api/getSlidesApi";
import { ListResponse, Slide } from "models";
import { call, put, takeLatest } from "redux-saga/effects";
import { sliderActions } from "./sliderSlice";

function* getSlider() {
  try {
    const response: ListResponse<Slide> = yield call(getSlidesApi.getSlides);
    yield put(sliderActions.getSlidesSuccess(response));
  } catch (err) {
    console.log("Failed to get slides", err);
    yield put(sliderActions.getSlidesFailed());
  }
}

export default function* sliderSaga() {
  yield takeLatest(sliderActions.getSlides, getSlider);
}
