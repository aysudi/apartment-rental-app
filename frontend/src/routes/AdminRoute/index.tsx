import { useAuth } from "@/context/AuthContext";
import type { JSX } from "react";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }: { children: JSX.Element }) => {
  const { user, loading } = useAuth();
  if (loading) return null;
  return user?.role === "admin" ? (
    children
  ) : (
    <Navigate to="/admin/dashboard" replace />
  );
};

export default AdminRoute;
