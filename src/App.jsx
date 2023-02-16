import "./App.scss";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import getData from "../firebase";
import Home from "./pages/Home/Home.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import ProductGrid from "./pages/ProductGrid/ProductGrid";
import Product from "./pages/Product/Product";
import Footer from "./pages/Footer/Footer";
import Cart from "./pages/Cart/Cart";

function App() {
  const [cart, setCart] = useState([]);

  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((items) => {
      setData(items);
    });
  }, []);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/products/" element={<ProductGrid data={data} />} />
          <Route
            path="/products/:name/"
            element={<Product data={data} addToCart={addToCart} />}
          />
          <Route path="/cart" element={<Cart data={cart} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
