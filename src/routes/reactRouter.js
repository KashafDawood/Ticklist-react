import Home from "./../pages/Home";
import Signup from "./../pages/Signup";
import Login from "./../pages/Login";
import Dashboard from "./../pages/Dashboard";
import ForgetPassword from "./../pages/ForgetPassword";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/forgetPassword",
    element: <ForgetPassword />,
  },
]);

export default router;
