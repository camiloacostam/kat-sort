import "./App.css";
import { Routes, Route } from "react-router-dom";
//Pages
import { ErrorNotFoundPage } from "./pages";

function App() {
  return (
    <>
      <header></header>
      <main>
        <Routes>
          <Route path="*" element={<ErrorNotFoundPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
