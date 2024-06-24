import "./App.css";
import { Routes, Route } from "react-router-dom";
//Pages
import {
  ErrorNotFoundPage,
  Login,
  SignUp,
  DashboardPage,
  CreateTestPage,
} from "./pages";
// Features
import { ProtectedRoute, PublicRoute } from "./features/routes";
import NavBar from "./features/ui/nav-bar";

function App() {
  return (
    <>
      <header></header>
      <main>
        <Routes>
          <Route path="*" element={<ErrorNotFoundPage />} />
          {/* Public Routes*/}
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<SignUp />} />
          </Route>
          {/* Protected Routes*/}
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/crear-prueba" element={<CreateTestPage />} />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
