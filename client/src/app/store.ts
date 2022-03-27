import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

import navigationReducer from "../features/navigation/navigationSlice";
import menuReducer from "features/menu/menuSlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    menu: menuReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
