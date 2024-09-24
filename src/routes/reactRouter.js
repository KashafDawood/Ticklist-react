import Home from "./../pages/Home";
import Signup from "./../pages/Signup";
import Login from "./../pages/Login";
import Dashboard from "./../pages/Dashboard";
import ForgetPassword from "./../pages/ForgetPassword";
import Tasks from "./../pages/Tasks";
import Chat from "./../pages/Chat";
import Layout from "../components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import ProtectedRoutes from "./protectedRoutes";
// import { AuthProvider } from "./auth";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/signup",
    element: (
      <Layout>
        <Signup />
      </Layout>
    ),
  },
  {
    path: "/login",
    element: (
      <Layout>
        <Login />
      </Layout>
    ),
  },
  {
    path: "/forgetPassword",
    element: (
      <Layout>
        <ForgetPassword />
      </Layout>
    ),
  },
  {
    path: "/dashboard",
    element: (
      // <ProtectedRoutes>
      <Dashboard />
      // </ProtectedRoutes>
    ),
    children: [
      {
        path: "tasks",
        element: (
          // <ProtectedRoutes>
          <Tasks />
          // </ProtectedRoutes>
        ),
      },
      {
        path: "chat",
        element: (
          // <ProtectedRoutes>
          <Chat />
          // </ProtectedRoutes>
        ),
      },
    ],
  },
]);

export default function AppRouter() {
  return (
    // <AuthProvider>
    <RouterProvider router={router} />
    // </AuthProvider>
  );
}
