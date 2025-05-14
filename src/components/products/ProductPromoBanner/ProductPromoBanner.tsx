import React from "react";
import "./ProductPromoBanner.css";

const ProductPromoBanner: React.FC = () => (
  <section className="products-promo-section">
    <img
      src="https://www.upkoofficialshop.com/cdn/shop/files/240426banner_67dba98d-f376-479d-8ba1-96efbeffe2e2.jpg"
      alt="All Products Promo"
      className="promo-banner-img"
    />
    <div className="promo-banner-content">
      <h1 className="promo-banner-title">All Products</h1>
      <div className="promo-banner-promos">
        <div className="promo-banner-promo">15% OFF For 2 And More Items</div>
        <div className="promo-banner-promo">
          $49 Free Gift For Orders Over $499
        </div>
        <div className="promo-banner-promo">
          Free Shipping For Orders Over $109
        </div>
        <div className="promo-banner-promo">Unwrap Your Desire With UPKO</div>
      </div>
    </div>
  </section>
);

export default ProductPromoBanner;
