import "./App.css";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./components/ErrorPage.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import ProductList from "./components/ProductList.jsx";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ProductList />
              <Footer />
            </>
          }
        />
        <Route path="/products/:productId" element={<ProductDetails />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;