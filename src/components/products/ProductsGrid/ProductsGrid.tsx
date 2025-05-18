import React from "react";
import "./ProductsGrid.css";
import productData from "./productData";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem, toggleCart } from "../../../store/cartSlice";
import { addToWishlist, toggleFilter } from "../../../store/wishlistSlice";
import { RootState } from "../../../store/store";
import { resetFilters } from "../../../store/filtersSlice";

const products = productData;

const ProductsGrid: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const priceRange = useSelector((state: RootState) => state.filters.priceRange);
  const wishlist = useSelector((state: RootState) => state.wishlist.items);

  const isFilterVisible = useSelector((state: RootState) => state.filters.applied);

  const isInWishlist = (productId: number) => {
    return wishlist.some((item) => item.index === productId);
  };

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

  const handleAddToWishlist = (
    e: React.MouseEvent,
    product: (typeof products)[0]
  ) => {
    e.preventDefault();

    if (isInWishlist(product.index)) {
      navigate("/wishlist"); // переход в избранное
    } else {
      dispatch(addToWishlist(product)); // добавляем в избранное
    }
  };

  const filteredProducts = products.filter(product => {
    const priceStr = product.newPrice || product.price;
    const price = parseFloat(priceStr.replace(/[^0-9.]/g, ''));
    return price >= priceRange[0] && price <= priceRange[1];
  });


  return (
    <div className="container">

    <div className="filter_wrapper">
      <div className="filter-button"  onClick={() => dispatch(toggleFilter())}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16"><path d="M324.4 64C339.6 64 352 76.37 352 91.63C352 98.32 349.6 104.8 345.2 109.8L240 230V423.6C240 437.1 229.1 448 215.6 448C210.3 448 205.2 446.3 200.9 443.1L124.7 385.6C116.7 379.5 112 370.1 112 360V230L6.836 109.8C2.429 104.8 0 98.32 0 91.63C0 76.37 12.37 64 27.63 64H324.4zM144 224V360L208 408.3V223.1C208 220.1 209.4 216.4 211.1 213.5L314.7 95.1H37.26L140 213.5C142.6 216.4 143.1 220.1 143.1 223.1L144 224zM496 400C504.8 400 512 407.2 512 416C512 424.8 504.8 432 496 432H336C327.2 432 320 424.8 320 416C320 407.2 327.2 400 336 400H496zM320 256C320 247.2 327.2 240 336 240H496C504.8 240 512 247.2 512 256C512 264.8 504.8 272 496 272H336C327.2 272 320 264.8 320 256zM496 80C504.8 80 512 87.16 512 96C512 104.8 504.8 112 496 112H400C391.2 112 384 104.8 384 96C384 87.16 391.2 80 400 80H496z"></path></svg>
        
        Filter
      </div>

      <select name="featured" id="featured">
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
    </div>

    {isFilterVisible && (
      <div className="filter-info">
        <p className="products-found">
          <span>{filteredProducts.length}</span> Products Found
        </p>

        <div className="filter-diapazone">
          <div className="filter-remove-button" onClick={() => dispatch(resetFilters())}>X</div>
          <p className="filter-diapazone-price">
            $<span>{priceRange[0]}.00</span> - $<span>{priceRange[1]}.00</span>
          </p>
        </div>
      </div>
    )}

      <div className="products-grid">
        {filteredProducts.map((p) => (
          <Link to={`/product/${p.slug}/${p.index}`} key={p.index}>
            <div className="product-card" data-index={p.index}>
              <div
                className="product-img-wrapper"
                style={{ position: "relative" }}
              >
                <div
                  className={`add-to-wishlist-button ${
                    isInWishlist(p.index) ? "added" : ""
                  }`}
                  onClick={(e) => handleAddToWishlist(e, p)}
                  style={{ cursor: "pointer" }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 19C11 19 3 13.5 3 8.5C3 5.5 5.5 3 8.5 3C10.1 3 11 4.5 11 4.5C11 4.5 11.9 3 13.5 3C16.5 3 19 5.5 19 8.5C19 13.5 11 19 11 19Z"
                      stroke="#fff"
                      strokeWidth="2"
                      fill={isInWishlist(p.index) ? "red" : "none"}
                    />
                  </svg>
                </div>

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
      {filteredProducts.length < 1 && <h1 className="error-text">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="18" height="18">
        <path fill="#e0b252" d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"></path>
        </svg>
        No products were found matching your selection</h1>}
    </div>
  );
};

export default ProductsGrid;
