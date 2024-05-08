import "./App.css";
import { Routes, Route } from "react-router-dom";
//Pages
import { ErrorNotFoundPage, Login, SignUp } from "./pages";

function App() {
  return (
    <>
      <header></header>
      <main>
        <Routes>
          <Route path="*" element={<ErrorNotFoundPage />} />
          <Route
            path="/"
            element={
              <div>
                <h1>Hola Kat Sort</h1>
              </div>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
