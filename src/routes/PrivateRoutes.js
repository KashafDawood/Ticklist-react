// ProtectedRoutesConfig.js
import Dashboard from "./../pages/Dashboard";
import Tasks from "./../pages/Tasks";
import Chat from "./../pages/Chat";
import React from "react";
import ProtectedRoutes from "./protectedRoutes";
import { createBrowserRouter } from "react-router-dom";
import PrivateLayout from "../components/PrivateLayout";

const privateRoutes = createBrowserRouter([
  {
    id: "dashboard",
    path: "/dashboard",
    element: (
      <ProtectedRoutes>
        <PrivateLayout>
          <Dashboard />
        </PrivateLayout>
      </ProtectedRoutes>
    ),
  },
  {
    id: "tasks",
    path: "/tasks",
    element: (
      <ProtectedRoutes>
        <PrivateLayout>
          <Tasks />
        </PrivateLayout>
      </ProtectedRoutes>
    ),
  },
  {
    id: "chat",
    path: "/chat",
    element: (
      <ProtectedRoutes>
        <PrivateLayout>
          <Chat />
        </PrivateLayout>
      </ProtectedRoutes>
    ),
  },
]);

export default privateRoutes;
