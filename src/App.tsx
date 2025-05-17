import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RootState } from "./store/store";
import { Cart } from "./components/Cart/Cart";
import DiscountBanner from "./components/DiscountBanner";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductItemPage from "./pages/ProductItemPage";
import ScrollToTop from "./utils/ScrollToTop/ScrollToTop";
import ExampleConfetti from "./components/Confeti/ExampleConfetti";
import "./App.css";

const App: React.FC = () => {
  const items = useSelector((state: RootState) => state.cart.items);

  const totalPrice = items.reduce((total, item) => {
  const price = parseFloat(item.price.replace(/[^0-9.]/g, '')) || 0;
  return total + price * item.quantity;
}, 0);

  return (
    <BrowserRouter basename="/upko/">
      <ScrollToTop />
      <div style={{ background: "#fff", minHeight: "100vh" }}>
        <DiscountBanner />
        <Header />
        {totalPrice > 98 && <ExampleConfetti />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:slug/:index" element={<ProductItemPage />} />
        </Routes>
        <Footer />
        <Cart />
      </div>
    </BrowserRouter>
  );
};

export default App;