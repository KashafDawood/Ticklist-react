import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "./auth"; // Import the useAuth hook

const ProtectedRoutes = () => {
  const { isSignedIn } = useAuth(); // Check authentication status

  return isSignedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
