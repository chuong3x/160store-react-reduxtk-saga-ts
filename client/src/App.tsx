import Footer from "components/Layout/Footer";
import Header from "components/Layout/Header";
import Topbar from "components/Layout/Topbar";
import Auth from "pages/Auth";
import ProductDetail from "pages/ProductDetail";
import styles from "./App.module.scss";
import React, { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import ScrollButton from "components/Common/ScrollButton";
import Site from "features/site/Site";
import { useAppSelector } from "app/hooks";
import { selectSiteShow } from "features/site/siteSlice";
import clsx from "clsx";
import Collection from "pages/Collection";

function App() {
  const siteIsShow = useAppSelector(selectSiteShow);

  return (
    <div className={styles.app}>
      <div
        className={clsx(styles.appContainer, { [styles.transX]: siteIsShow })}
      >
        <Topbar />
        <Header />
        <div className={styles.main}>
          <Routes>
            <Route path="/login" element={<Auth />} />
            <Route path="/products" element={<Collection />} />

            <Route path="/products" element={<ProductDetail />}>
              <Route path=":name" element={<ProductDetail />}></Route>
            </Route>
            <Route path="/products" element={<Collection />} />

            <Route path="/collection" element={<Collection />} />
            <Route path="/" element={<Home />} />
          </Routes>
          <ScrollButton />
        </div>
        <Footer />
      </div>
      {selectSiteShow && <Site />}
    </div>
  );
}

export default App;
