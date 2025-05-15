import { useState } from "react";
import "./FeaturedProductsSection.css";

// Featured Products section, minimal markup, all content centered in .container
const products = [
  {
    img: "/images/model-2_grande.webp",
    name: "UPKO Luxury BDSM Vertical Trunk Kit",
    oldPrice: "$1,699.99",
    price: "$1,499.99",
    discount: "-12%",
  },
  {
    img: "/images/upko-14-2.jpg",
    name: "UPKO Sade Trunk",
    oldPrice: "$611.10",
    price: "$549.99",
    discount: "-10%",
  },
  {
    img: "/images/wechatimg258.jpg",
    name: "UPKO Leather Kinky Tools Set",
    oldPrice: "$611.10",
    price: "$549.99",
    discount: "-10%",
  },
  {
    img: "/images/1_2b0f5d8f.jpg",
    name: "Black Label Deluxe Kit",
    oldPrice: "$1,699.99",
    price: "$1,499.99",
    discount: "-12%",
  },
];

const filters = [
  { label: "Gift Sets", active: true },
  { label: "Bondage" },
  { label: "Spanking" },
  { label: "Gags" },
  { label: "Fetish Wear" },
  { label: "Chastity" },
];

const hoverImages = [
  "https://www.upkoofficialshop.com/cdn/shop/files/UPKO_14_-1.jpg",
  "https://www.upkoofficialshop.com/cdn/shop/products/LEE_6885.jpg",
  "https://www.upkoofficialshop.com/cdn/shop/files/WechatIMG262.jpg",
  "https://www.upkoofficialshop.com/cdn/shop/products/1200.jpg",
];

export default function FeaturedProductsSection() {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <section className="featured-products">
      <div className="container">
        {/* Section title */}
        <div className="fp-title">
          <h2>FEATURED PRODUCTS</h2>
          <div className="fp-divider" />
        </div>
        {/* Filters */}
        <ul className="fp-filters">
          {filters.map((f) => (
            <li key={f.label} className={f.active ? "active" : ""}>
              {f.label}
            </li>
          ))}
        </ul>
        {/* Products grid */}
        <div className="fp-grid">
          {products.map((p, i) => (
            <div className="fp-card" key={i}>
              <div
                className="fp-img-wrap"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{ position: "relative" }}
              >
                {hoverImages[i] ? (
                  <>
                    <img
                      src={p.img}
                      alt={p.name}
                      className={`fp-img fp-img-fade ${
                        hovered === i ? "fp-img-fade-out" : "fp-img-fade-in"
                      }`}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                      }}
                    />
                    <img
                      src={hoverImages[i]}
                      alt={p.name}
                      className={`fp-img fp-img-fade ${
                        hovered === i
                          ? "fp-img-fade-in fp-img-zoom"
                          : "fp-img-fade-out"
                      }`}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </>
                ) : (
                  <img src={p.img} alt={p.name} className="fp-img" />
                )}
                <span className="fp-discount">{p.discount}</span>
              </div>
              <div className="fp-card-content">
                <h3 className="fp-name">{p.name}</h3>
                <div className="fp-prices">
                  <del className="fp-old">{p.oldPrice}</del>
                  <span className="fp-price">{p.price}</span>
                </div>
                {/* Color dots, just for visual, not interactive */}
                {/* <div className="fp-colors">
                  <span className="fp-color-dot" />
                  <span className="fp-color-dot red" />
                  <span className="fp-color-dot white" />
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
