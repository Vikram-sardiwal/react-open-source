import Welcome from "./components/Welcome.jsx";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./components/ErrorPage.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import ProductList from "./components/ProductList.jsx";
import ProductDetails from "./components/ProductDetails.jsx";

function App() {
  return (
    <>
    <Navbar/>
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
              <div className="product-page">
                <ProductList />
              </div>
              <Footer />
            </>
          }
        />

        <Route
          path="/products/:id"
          element={
            <>
              <div className="product-page">
                <ProductDetails />
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