import React from "react";
import "./ProductsGrid.css";
import productData from "./productData";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addItem, toggleCart} from "../../../store/cartSlice";

const products = productData;

const ProductsGrid: React.FC = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (
    e: React.MouseEvent,
    product: (typeof products)[0]
  ) => {
    e.preventDefault();
    dispatch(
      addItem({
        id: product.index,
        title: product.title,
        price: product.newPrice || product.price,
        quantity: 1,
        image: product.img,
      })
    );
    dispatch(toggleCart());
  };

  return (
    <div className="container">
      <div className="products-grid">
        {products.map((p) => (
          <Link to={`/product/${p.slug}/${p.index}`} key={p.index}>
            <div className="product-card" data-index={p.index}>
              <div
                className="product-img-wrapper"
                style={{position: "relative"}}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className={
                    p.imgHover ? "product-img main-img" : "product-img"
                  }
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                />
                {p.imgHover && (
                  <img
                    src={p.imgHover}
                    alt={p.title}
                    className="product-img hover-img"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  />
                )}
                <div className="product-hover-buttons">
                  {/* <button
                    onClick={(e) => {
                      e.preventDefault();
                      console.log(1);
                    }}
                  >
                    Quick view
                  </button> */}
                  <button onClick={(e) => handleAddToCart(e, p)}>
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="product-info">
                <div className="product-title">{p.title}</div>
                <div className="product-price">
                  {p.newPrice ? (
                    <>
                      <span className="price">
                        <span className="strike">{p.price}</span>
                      </span>
                      <span className="new-price">{p.newPrice}</span>
                    </>
                  ) : (
                    <span className="price">{p.price}</span>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid;
