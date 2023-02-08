import "./App.scss";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import getData from "../firebase";
import Home from "./pages/home_page/Home.jsx";
import NavBar from "./components/navbar/NavBar.jsx";
import ProductPage from "./pages/product_page/ProductPage";
import Item from "./pages/item_page/Item";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((items) => {
      setData(items);
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/products/" element={<ProductPage data={data} />} />
          <Route path="/products/:name/" element={<Item data={data} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
