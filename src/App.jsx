import "./App.scss";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import getData from "../firebase";
import Home from "./pages/home_page/Home.jsx";
import Products from "./components/products/Products";
import NavBar from "./components/NavBar/NavBar.jsx";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((items) => {
      setData(items);
    });
  }, []);

  //   return (
  //     <div className="App">
  //       <NavBar />
  //       <Home data={data} />
  //     </div>
  //   );
  // }

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/products/:id" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
