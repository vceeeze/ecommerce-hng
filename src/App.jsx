import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Products from "./components/Products";
import Orders from "./components/Orders";
import Cart from "./components/Cart";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Card />} />
            <Route path="products" element={<Products />} />
            <Route path="orders" element={<Orders />} />
            <Route path="carts" element={<Cart />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
