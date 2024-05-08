import "./App.css";
import { Routes, Route } from "react-router-dom";
//Pages
import { ErrorNotFoundPage, Login, SignUp } from "./pages";
// Features
import { ProtectedRoute } from "./features/routes";

function App() {
  return (
    <>
      <header></header>
      <main>
        <Routes>
          <Route path="*" element={<ErrorNotFoundPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<SignUp />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<h1>Dashboard</h1>} />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
