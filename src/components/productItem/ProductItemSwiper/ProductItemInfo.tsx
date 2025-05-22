import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./ProductItemInfo.css";
import {ProductData} from "../../../utils/getProductData";
import {QuantityCounter} from "../../../components/QuantityCounter";
import {addItem, toggleCart} from "../../../store/cartSlice";
import { addToWishlist } from "../../../store/wishlistSlice";
import { RootState } from "../../../store/store";

interface ProductItemInfoProps {
  productData: ProductData;
}



const ProductItemInfo: React.FC<ProductItemInfoProps> = ({productData}) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

const calculateDiscount = () => {
  if (!productData.newPrice) return null;

  // Функция для удаления текста из цены
  const cleanPrice = (price: string) => {
    return parseFloat(price.replace(/[^0-9.]/g, "")); // Убираем все символы, кроме цифр и точки
  };

  const oldPrice = cleanPrice(productData.price);
  const newPrice = cleanPrice(productData.newPrice);

  const discount = Math.round(((oldPrice - newPrice) / oldPrice) * 100);
  return discount > 0 ? discount : null;
};

const discount = calculateDiscount();

  const handleAddToCart = () => {
    dispatch(
      addItem({
        id: productData.index,
        title: productData.title,
        price: productData.newPrice || productData.price || "",
        quantity,
        image: productData.img,
      })
    );
    dispatch(toggleCart());
  };

const wishlist = useSelector((state: RootState) => state.wishlist.items);
  const isInWishlist = (productId: number) => {
  return wishlist.some((item) => item.index === productId);
};

  const handleAddToWishlist = (
    e: React.MouseEvent,
    product: ProductData
  ) => {
    e.preventDefault();
    dispatch(addToWishlist(product));
  };


  return (
    <div className="product-item__info">
      <h1 className="product-item__title">{productData.title}</h1>
      <div className="product-item__price-row">
        {productData.newPrice ? (
          <>
            <span className="product-item__old-price">{productData.price}</span>
            <span className="product-item__price">{productData.newPrice}</span>
            {discount && (
              <span className="product-item__badge">SAVE {discount}%</span>
            )}
          </>
        ) : (
          <span className="product-item__price">{productData.price}</span>
        )}
      </div>
      <div className="product-item__rating-row">
        <span className="product-item__stars">★★★★★</span>
        <span className="product-item__reviews">37 reviews</span>
      </div>
      <div className="product-item__actions">
        <QuantityCounter initialValue={1} onChange={setQuantity} />
        <button
          className="product-item__btn product-item__btn--main"
          onClick={handleAddToCart}
        >
          Add to cart
        </button>




        <div className={`add-to-wishlist-button-from-product-info ${isInWishlist(productData.index) ? "added" : ""}`} onClick={(e) => handleAddToWishlist(e, productData)}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 19C11 19 3 13.5 3 8.5C3 5.5 5.5 3 8.5 3C10.1 3 11 4.5 11 4.5C11 4.5 11.9 3 13.5 3C16.5 3 19 5.5 19 8.5C19 13.5 11 19 11 19Z" stroke="currentColor" strokeWidth="1" fill="none"></path></svg>
        </div>





      </div>
      <div className="product-item__availability">
        Availability: <span>In Stock</span>
      </div>
      <div className="product-item__discount-info">
        Discount Auto-apply at Checkout 🛒
      </div>
      <div className="product-item__delivery">
        Order in the next 18 hours 18 minutes to get it between Friday, 16th May
        and <b>Wednesday, 21st May</b>
      </div>
      <div>
        <img src="/Safe_Checkout.png" alt="" />
      </div>
    </div>
  );
};

export default ProductItemInfo;
