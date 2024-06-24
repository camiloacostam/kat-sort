import { Navigate, Outlet } from "react-router-dom";
import { useStore } from "zustand";
import { useAuthStore } from "../user";
import NavBar from "../ui/nav-bar";

export default function ProtectedRoute() {
  const authInfo = useStore(useAuthStore);

  return authInfo.isAuthenticated ? (
    <main>
      <header>
        <NavBar />
      </header>
      <Outlet />
    </main>
  ) : (
    <Navigate to="/login" />
  );
}
