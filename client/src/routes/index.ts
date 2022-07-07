import React from "react";

import MainLayout from "components/Layout/MainLayout";
import Login from "pages/Login";
import Collection from "pages/Collection";
import Home from "pages/Home";
import Register from "pages/Register";
import ProductDetail from "pages/ProductDetail";
import Dashboard from "pages/Dashboard";
import CheckoutPage from "pages/CheckoutPage";
import BlogPage from "pages/BlogPage";
import AboutPage from "pages/About";
import GuidePage from "pages/GuidePage";
import StoresPage from "pages/StorePage";

interface RouteObjectProps {
  path: string;
  component: React.ComponentType;
  layout?: any;
}

const publicRoutes: RouteObjectProps[] = [
  { path: "/", component: Home },
  { path: "/*", component: Home },
  { path: "/collection", component: Collection },
  { path: "/collection/:name", component: Collection },
  { path: "/products", component: ProductDetail },
  { path: "/products/:name", component: ProductDetail },
  { path: "/page", component: Collection, layout: null },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/checkouts", component: CheckoutPage },
  { path: "/guide/*", component: GuidePage },
  { path: "/stores", component: StoresPage },
  { path: "/about", component: AboutPage },
  { path: "/news", component: BlogPage },
];

const privateRoutes = [
  { path: "/dashboard", component: Dashboard, layout: MainLayout },
];

export { publicRoutes, privateRoutes };
