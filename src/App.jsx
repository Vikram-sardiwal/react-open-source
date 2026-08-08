import Welcome from "./components/Welcome.jsx";
import DarkMode from "./components/Dark-Mode.jsx";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./components/ErrorPage.jsx";

function App() {
  return (
    <>
      <DarkMode />

      <Routes>
        <Route
          path="/"
          element={
            <div className="app">
              <Welcome />
            </div>
          }
        />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
