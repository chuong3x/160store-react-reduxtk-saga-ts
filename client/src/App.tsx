import Footer from "components/Layout/Footer";
import Header from "components/Layout/Header";
import Topbar from "components/Layout/Topbar";
import Login from "pages/Login";
import ProductDetail from "pages/ProductDetail";
import styles from "./App.module.scss";
import React, { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import ScrollButton from "components/Common/ScrollButton";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Header />
      <div className={styles.main}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<ProductDetail />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <ScrollButton />
      </div>
      <Footer />
    </div>
  );
}

export default App;
