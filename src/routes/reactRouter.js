import Home from "./../pages/Home";
import Signup from "./../pages/Signup";
import Login from "./../pages/Login";
import Dashboard from "./../pages/Dashboard";
import ForgetPassword from "./../pages/ForgetPassword";
import Tasks from "./../pages/Dashboard/tasks";
import Chat from "./../pages/Dashboard/chat";
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
    path: "/dashboard/tasks",
    element: (
      <Layout>
        <Tasks />
      </Layout>
    ),
  },
  {
    path: "/dashboard/chat",
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
