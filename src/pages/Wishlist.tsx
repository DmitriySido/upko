import React from "react";
import "../components/products/ProductsGrid/ProductsGrid.css";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import productData from "../components/products/ProductsGrid/productData";
import { addItem, toggleCart } from "../store/cartSlice";
import { removeFromWishlist } from "../store/wishlistSlice";
import { RootState } from "../store/store";


const products = productData;

const ProductsGrid: React.FC = () => {

  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);


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

  const handleRemoveFromWishlist = (
    e: React.MouseEvent,
    productIndex: number
  ) => {
    e.preventDefault(); // предотвращает переход по ссылке
    dispatch(removeFromWishlist(productIndex));
  };

  return (
    <main className="container" style={{ background: "#fff", width: "100%", minHeight: "60vh" }}>
      {
        wishlistItems.length > 0 ?
              <div className="products-grid">
        {wishlistItems.map((p) => (
          <Link to={`/product/${p.slug}/${p.index}`} key={p.index}>
            <div className="product-card" data-index={p.index}>
              <div
                className="product-img-wrapper"
                style={{position: "relative"}}
              >
                <button className="remove-from-wishlist-button" onClick={(e) => handleRemoveFromWishlist(e, p.index)}>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 64 64">
                  <path d="M 28 7 C 25.243 7 23 9.243 23 12 L 23 15 L 13 15 C 11.896 15 11 15.896 11 17 C 11 18.104 11.896 19 13 19 L 15.109375 19 L 16.792969 49.332031 C 16.970969 52.510031 19.600203 55 22.783203 55 L 41.216797 55 C 44.398797 55 47.029031 52.510031 47.207031 49.332031 L 48.890625 19 L 51 19 C 52.104 19 53 18.104 53 17 C 53 15.896 52.104 15 51 15 L 41 15 L 41 12 C 41 9.243 38.757 7 36 7 L 28 7 z M 28 11 L 36 11 C 36.552 11 37 11.449 37 12 L 37 15 L 27 15 L 27 12 C 27 11.449 27.448 11 28 11 z M 19.113281 19 L 44.886719 19 L 43.212891 49.109375 C 43.153891 50.169375 42.277797 51 41.216797 51 L 22.783203 51 C 21.723203 51 20.846109 50.170328 20.787109 49.111328 L 19.113281 19 z M 32 23.25 C 31.033 23.25 30.25 24.034 30.25 25 L 30.25 45 C 30.25 45.966 31.033 46.75 32 46.75 C 32.967 46.75 33.75 45.966 33.75 45 L 33.75 25 C 33.75 24.034 32.967 23.25 32 23.25 z M 24.642578 23.251953 C 23.677578 23.285953 22.922078 24.094547 22.955078 25.060547 L 23.652344 45.146484 C 23.685344 46.091484 24.462391 46.835938 25.400391 46.835938 C 25.421391 46.835938 25.441891 46.835938 25.462891 46.835938 C 26.427891 46.801938 27.183391 45.991391 27.150391 45.025391 L 26.453125 24.939453 C 26.419125 23.974453 25.606578 23.228953 24.642578 23.251953 z M 39.355469 23.251953 C 38.388469 23.224953 37.580875 23.974453 37.546875 24.939453 L 36.849609 45.025391 C 36.815609 45.991391 37.571109 46.801938 38.537109 46.835938 C 38.558109 46.836938 38.578609 46.835938 38.599609 46.835938 C 39.537609 46.835938 40.314656 46.091484 40.347656 45.146484 L 41.044922 25.060547 C 41.078922 24.094547 40.321469 23.285953 39.355469 23.251953 z"></path>
                  </svg>
                </button>

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

      :
      
      <div className="wishlist-empty-wrapepr">
        <div className="wishlist-empty-inner">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <path d="M298.7 97.64L257 143.7L213.5 97.91C173.6 57.42 110 52.6 70.71 86.82L70.53 86.97C21.8 128.7 19.4 203.3 62.71 248.2L62.73 248.2L256.4 447.9C256.5 447.9 256.6 447.8 256.7 447.7L269.1 434.8C273.4 445.3 278.7 455.3 284.9 464.6L279.4 470.3C266.4 483.2 245.5 483.2 233.5 470.3L39.71 270.5C-16.22 212.5-13.23 116.6 49.7 62.68C102.8 16.41 184.1 24.47 234.3 73.46C235 74.19 235.7 74.92 236.5 75.67L256.4 96.64L275.4 75.67C276.3 74.76 277.2 73.87 278.1 72.99C328.3 24.42 408.3 16.56 463.2 62.68C506.1 100.1 520.7 157.6 507 208.7C497.4 204.2 487.3 200.5 476.8 197.8C486.3 158.8 474.8 115.3 442.4 87C400.9 52.33 338.2 57.7 298.7 97.64V97.64zM454.6 368L491.3 404.7C497.6 410.9 497.6 421.1 491.3 427.3C485.1 433.6 474.9 433.6 468.7 427.3L432 390.6L395.3 427.3C389.1 433.6 378.9 433.6 372.7 427.3C366.4 421.1 366.4 410.9 372.7 404.7L409.4 368L372.7 331.3C366.4 325.1 366.4 314.9 372.7 308.7C378.9 302.4 389.1 302.4 395.3 308.7L432 345.4L468.7 308.7C474.9 302.4 485.1 302.4 491.3 308.7C497.6 314.9 497.6 325.1 491.3 331.3L454.6 368zM576 368C576 447.5 511.5 512 432 512C352.5 512 288 447.5 288 368C288 288.5 352.5 224 432 224C511.5 224 576 288.5 576 368zM432 256C370.1 256 320 306.1 320 368C320 429.9 370.1 480 432 480C493.9 480 544 429.9 544 368C544 306.1 493.9 256 432 256z"></path>
          </svg>

          <p className="wishlist-empty-title">Wishlist is empty.</p>
          <p className="wishlist-empty-text">You don't have any products in the wishlist yet.</p>
          <p className="wishlist-empty-text">You will find a lot of interesting products on our "Shop" page.</p>
        </div>
      </div>
      }
    </main>
  );
};

export default ProductsGrid;
