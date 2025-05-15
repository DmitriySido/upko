import React from "react";
import {Provider} from "react-redux";
import {store} from "./store/store";
import {Cart} from "./components/Cart/Cart";
import DiscountBanner from "./components/DiscountBanner";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProductItemPage from "./pages/ProductItemPage";
import "./App.css";
import ScrollToTop from "./utils/ScrollToTop/ScrollToTop";


const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/upko/">
      <ScrollToTop />
        <div style={{background: "#fff", minHeight: "100vh"}}>
          <DiscountBanner />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:slug/:index" element={<ProductItemPage />} />
          </Routes>
          <Footer />
          <Cart />
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
