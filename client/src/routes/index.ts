import React from "react";

import MainLayout from "components/Layout/MainLayout"
import Login from "pages/Login"
import Collection from "pages/Collection"
import Home from "pages/Home"
import Register from "pages/Register";
import ProductDetail from "pages/ProductDetail";

interface RouteObjectProps{
    path: string;
    component: React.ComponentType;
    layout?: any;
}

const publicRoutes: RouteObjectProps[] =[
    {path: '/', component: Home},
    {path: '/collection', component: Collection},
    {path: '/products', component: ProductDetail},
    {path: '/products/:name', component: ProductDetail},
    {path: '/page', component: Collection, layout: null},
    {path: '/login', component: Login},
    {path: '/register', component: Register},
]

const privateRoutes=[{path: '/login', component: Login, Layout: MainLayout}]

export { publicRoutes, privateRoutes}