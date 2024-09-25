// ProtectedRoutesConfig.js
import Dashboard from "./../pages/Dashboard";
import Tasks from "./../pages/Tasks";
import Chat from "./../pages/Chat";
import React from "react";
import ProtectedRoutes from "./protectedRoutes";
import { createBrowserRouter } from "react-router-dom";

const privateRoutes = createBrowserRouter([
  {
    id: "dashboard",
    path: "/dashboard",
    element: (
      <ProtectedRoutes>
        <Dashboard />
      </ProtectedRoutes>
    ),
    children: [
      {
        id: "tasks",
        path: "tasks",
        element: (
          <ProtectedRoutes>
            <Tasks />
          </ProtectedRoutes>
        ),
      },
      {
        id: "chat",
        path: "chat",
        element: (
          <ProtectedRoutes>
            <Chat />
          </ProtectedRoutes>
        ),
      },
    ],
  },
]);

export default privateRoutes;
