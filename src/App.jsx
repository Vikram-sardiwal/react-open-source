import Welcome from "./components/Welcome.jsx";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./components/ErrorPage.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
    <Routes>
        <Route
          path="/"
          element={
            <>
            <div className="app">
              <Welcome />
            </div>
            <Footer />
            </>
          }
        />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;