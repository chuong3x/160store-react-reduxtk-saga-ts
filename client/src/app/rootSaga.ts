import { all } from "redux-saga/effects";
import navigationSaga from "../features/navigation/navigationSaga";
import menuSaga from "../features/menu/menuSaga";

export default function* rootSaga() {
  yield all([navigationSaga(), menuSaga()]);
}
