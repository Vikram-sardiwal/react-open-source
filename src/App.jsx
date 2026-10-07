import Welcome from "./components/Welcome.jsx";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./components/ErrorPage.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import CartPage from "./pages/CartPage.jsx";

function App() {
  return (
    <>
      <ScrollToTop />
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
              <div className="products-wrapper">
                <ProductsPage />
              </div>
              <Footer />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <div className="cart-wrapper">
                <CartPage />
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
