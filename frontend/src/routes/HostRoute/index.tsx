import { useAuth } from "@/context/AuthContext";
import type { JSX } from "react";
import { Navigate } from "react-router-dom";

const HostRoute = ({ children }: { children: JSX.Element }) => {
  const { user, loading } = useAuth();
  if (loading) return null;
  return user && user?.role === "host" ? (
    children
  ) : (
    <Navigate to="/login" replace />
  );
};

export default HostRoute;
