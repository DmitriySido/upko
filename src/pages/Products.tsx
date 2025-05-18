import React from "react";

import ProductPromoBanner from "../components/products/ProductPromoBanner/ProductPromoBanner";
import ProductsGrid from "../components/products/ProductsGrid/ProductsGrid";

const Products: React.FC = () => {
  return (
    <main style={{ background: "#fff", width: "100%", minHeight: "100vh" }}>
      <ProductPromoBanner />
      
      <ProductsGrid />
    </main>
  );
};

export default Products;
