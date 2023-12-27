import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage.jsx";
import About from "./pages/About/About.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import ProductDetail from "./pages/ProductDetail/ProductDetail.jsx";
import ProductList from "./components/ProductList/ProductList.jsx";
import ProductAdd from "./components/AddProduct/AddProduct.jsx";

function App() {

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/products" element={<ProductList />}></Route>
          <Route path="/products/:id" element={<ProductDetail />}></Route>
          <Route path="*" element={<p>Not found</p>}></Route>
          <Route path="/product-add/:id" element={<ProductAdd />} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
