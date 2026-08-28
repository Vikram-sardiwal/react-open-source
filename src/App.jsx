import { Route, Routes } from "react-router-dom";
import { WishlistProvider } from "./context/WishlistProvider.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Welcome from "./components/Welcome.jsx";
import Products from "./components/Products.jsx";
import Wishlist from "./components/Wishlist.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import "./App.css";

function App() {
  return (
    <WishlistProvider>
      <Navbar />
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

        <Route
          path="/products"
          element={
            <>
              <div className="app app-wide">
                <Products />
              </div>
              <Footer />
            </>
          }
        />

        <Route
          path="/wishlist"
          element={
            <>
              <div className="app app-wide">
                <Wishlist />
              </div>
              <Footer />
            </>
          }
        />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </WishlistProvider>
  );
}

export default App;