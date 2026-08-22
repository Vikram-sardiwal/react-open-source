import Welcome from "./components/Welcome.jsx";
import DarkMode from "./components/Dark-Mode.jsx";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./components/ErrorPage.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <header className="site-header">
                <DarkMode />
              </header>
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