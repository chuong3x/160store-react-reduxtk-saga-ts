import clsx from "clsx";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { useAppDispatch, useAppSelector } from "app/hooks";
import { selectSiteShow } from "features/site/siteSlice";
import { selectGalleryModalIsShow } from "features/gallery/gallerySlice";
import { publicRoutes, privateRoutes } from "routes";

import styles from "./App.module.scss";

import ScrollButton from "components/Common/ScrollButton";
import Site from "features/site/Site";
import MainLayout from "components/Layout/MainLayout";
import OnlyContentLayout from "components/Layout/OnlyContentLayout";
import PrivateRoute from "routes/PrivateRoute";
import GalleryModal from "features/gallery/GalleryModal";
import { useEffect } from "react";
import { cartActions } from "features/cart/cartSlice";
import { locationActions } from "features/location/locationSlice";

function App() {
  const dispatch = useAppDispatch();
  const siteIsShow = useAppSelector(selectSiteShow);
  const galleryIsShow = useAppSelector(selectGalleryModalIsShow);

  const cart_products = localStorage.getItem("cart_products");

  useEffect(() => {
    if (cart_products) {
      dispatch(cartActions.setCartProduct(JSON.parse(cart_products)));
    }
  }, [cart_products]);

  useEffect(() => {
    dispatch(locationActions.getLocations());
  }, []);

  return (
    <div className={styles.app}>
      <div
        className={clsx(styles.appContainer, { [styles.transX]: siteIsShow })}
      >
        <div className={styles.main}>
          <Routes>
            {publicRoutes.map((route, index) => {
              let Layout = MainLayout;
              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = OnlyContentLayout;
              }

              const Page = route.component;

              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
            {privateRoutes.map((route, index) => {
              let Layout = MainLayout;
              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = OnlyContentLayout;
              }

              const Page = route.component;

              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <PrivateRoute>
                      <Layout>
                        <Page />
                      </Layout>
                    </PrivateRoute>
                  }
                />
              );
            })}
          </Routes>
          <ScrollButton />
        </div>
      </div>
      {siteIsShow && <Site />}

      {galleryIsShow && <GalleryModal />}
      <ToastContainer />
    </div>
  );
}

export default App;
