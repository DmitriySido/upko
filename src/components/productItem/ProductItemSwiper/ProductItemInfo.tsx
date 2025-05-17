import React, {useState} from "react";
import {useDispatch} from "react-redux";
import "./ProductItemInfo.css";
import {ProductData} from "../../../utils/getProductData";
import {QuantityCounter} from "../../../components/QuantityCounter";
import {addItem, toggleCart} from "../../../store/cartSlice";

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
        <img src="/upko/Safe_Checkout.png" alt="" />
      </div>
    </div>
  );
};

export default ProductItemInfo;
