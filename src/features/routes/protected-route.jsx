import { Navigate, Outlet } from "react-router-dom";
import { useStore } from "zustand";
import { useAuthStore } from "../user";

export default function ProtectedRoute() {
  const authInfo = useStore(useAuthStore);

  return authInfo.isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
