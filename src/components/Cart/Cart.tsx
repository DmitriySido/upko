import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "../../store/store";
import {removeItem, updateQuantity, closeCart} from "../../store/cartSlice";
import {QuantityCounter} from "../QuantityCounter";
import "./Cart.css";
import ProgressBar from "./ProgressBar/ProgressBar";

export const Cart: React.FC = () => {
  const {items, isOpen} = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const handleQuantityChange = (id: number, quantity: number) => {
    dispatch(updateQuantity({id, quantity}));
  };

  const handleRemoveItem = (id: number) => {
    dispatch(removeItem(id));
  };

const calculateSubtotal = () => {
  const cleanPrice = (price: string) => {
    return parseFloat(price.replace(/[^0-9.]/g, "")); // Убираем все символы, кроме цифр и точки
  };

  return items.reduce((total, item) => {
    const price = cleanPrice(item.price); // Используем функцию для очистки цены
    return total + price * item.quantity;
  }, 0);
};

  const subtotal = calculateSubtotal();
  const shipping = subtotal > 0 ? 0 : 0; // Можно добавить стоимость доставки если нужно
  const total = subtotal + shipping;

  const handleCheckout = () => {
    window.location.href = `/payment/index.html?siteName=${'Upko'}&totalPrice=${total}`;
  };

  if (!isOpen) return null;

  return (
    <div className="cart">
      <div className="cart__overlay" onClick={() => dispatch(closeCart())} />
      <div className="cart__content">
        <div className="cart__header">
          <h2>Shopping Cart</h2>
          <button className="cart__close" onClick={() => dispatch(closeCart())}>
            ×
          </button>
        </div>

        <div className="header-delivery">
          <p className="header-delivery-text">
            {total > 0 && total < 99 ? (
              <>
                Almost there, add <span className="true-price">${(100 - total - 1).toFixed(2)}</span> more to get FREE SHIPPING!
              </>
            ) : total >= 99 ? (
              <>
                <span className="good-price">Congratulations!</span> You've got free shipping!
              </>
            ) : (
              <>
                Free Shipping for all orders over <span className="false-price">$99.00</span>
              </>
            )}
          </p>

          <ProgressBar progress={total}/>
        </div>

        <div className="cart__items">
          {items.length === 0 ? (
            <div className="cart__empty">Your cart is empty</div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="cart__item">
                <img
                  src={item.image}
                  alt={item.title}
                  className="cart__item-image"
                />
                <div className="cart__item-info">
                  <h3>{item.title}</h3>
                  <div className="cart__item-price">{item.price}</div>
                  <div className="cart__item-actions">
                    <QuantityCounter
                      initialValue={item.quantity}
                      onChange={(quantity) =>
                        handleQuantityChange(item.id, quantity)
                      }
                    />
                    <button
                      className="cart__item-remove"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="cart__footer">
            <div className="cart__summary">
              <div className="cart__summary-row">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              {shipping > 0 && (
                <div className="cart__summary-row">
                  <span>Shipping:</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
              )}
              <div className="cart__summary-row cart__summary-row--total">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <button className="cart__checkout" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
