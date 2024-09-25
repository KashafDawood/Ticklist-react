// NormalRoutes.js
import Home from "./../pages/Home";
import Signup from "./../pages/Signup";
import Login from "./../pages/Login";
import ForgetPassword from "./../pages/ForgetPassword";
import Layout from "../components/Layout";
import React from "react";
import privateRoutes from "./PrivateRoutes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const normalRoutes = createBrowserRouter([
  {
    id: "home",
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    id: "signup",
    path: "/signup",
    element: (
      <Layout>
        <Signup />
      </Layout>
    ),
  },
  {
    id: "login",
    path: "/login",
    element: (
      <Layout>
        <Login />
      </Layout>
    ),
  },
  {
    id: "forgetPassword",
    path: "/forgetPassword",
    element: (
      <Layout>
        <ForgetPassword />
      </Layout>
    ),
  },
]);

const combinedRoutes = [
  ...normalRoutes.routes.map((route) => ({
    ...route,
    id: `normal-${route.id}`,
  })),
  ...privateRoutes.routes.map((route) => ({
    ...route,
    id: `protected-${route.id}`,
  })),
];

export default function AppRouter() {
  return <RouterProvider router={createBrowserRouter(combinedRoutes)} />;
}
