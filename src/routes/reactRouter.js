import Home from "./../pages/Home";
import Signup from "./../pages/Signup";
import Login from "./../pages/Login";
import Dashboard from "./../pages/Dashboard";
import ForgetPassword from "./../pages/ForgetPassword";
import Projects from "./../pages/Projects";
import Chat from "./../pages/Chat";
import Layout from "../components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
    path: "/dashboard",
    element: (
      <Layout>
        <Dashboard />
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
    path: "/projects",
    element: (
      <Layout>
        <Projects />
      </Layout>
    ),
  },
  {
    path: "/chat",
    element: (
      <Layout>
        <Chat />
      </Layout>
    ),
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
