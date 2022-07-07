import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

import navigationReducer from "../features/navigation/navigationSlice";
import menuReducer from "features/menu/menuSlice";
import siteReducer from "features/site/siteSlice";
import searchReducer from "features/site/components/SearchForm/searchSlice";
import sliderReducer from "features/slider/sliderSlice";
import sectionReducer from "features/section/sectionSlice";
import authReducer from "features/auth/authSlice";
import galleryReducer from "features/gallery/gallerySlice";
import guideReducer from "features/guide/guideSlice";
import cartReducer from "features/cart/cartSlice";
import locationReducer from "features/location/locationSlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    menu: menuReducer,
    site: siteReducer,
    search: searchReducer,
    slider: sliderReducer,
    section: sectionReducer,
    auth: authReducer,
    gallery: galleryReducer,
    guide: guideReducer,
    cart: cartReducer,
    location: locationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
