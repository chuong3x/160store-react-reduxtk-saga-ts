import { all } from "redux-saga/effects";
import navigationSaga from "../features/navigation/navigationSaga";
import menuSaga from "../features/menu/menuSaga";
import searchSaga from "features/site/components/SearchForm/searchSaga";
import sliderSaga from "features/slider/sliderSaga";
import sectionProductsSaga from "features/section/sectionSaga";
import authSaga from "features/auth/authSaga";
import locationSaga from "features/location/locationSaga";

export default function* rootSaga() {
  yield all([
    navigationSaga(),
    menuSaga(),
    searchSaga(),
    sliderSaga(),
    sectionProductsSaga(),
    authSaga(),
    locationSaga(),
  ]);
}
