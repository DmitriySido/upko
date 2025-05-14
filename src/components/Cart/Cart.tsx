import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "../../store/store";
import {removeItem, updateQuantity, closeCart} from "../../store/cartSlice";
import {QuantityCounter} from "../QuantityCounter";
import "./Cart.css";

export const Cart: React.FC = () => {
  const {items, isOpen} = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const handleQuantityChange = (id: number, quantity: number) => {
    dispatch(updateQuantity({id, quantity}));
  };

  const handleRemoveItem = (id: number) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    window.location.href = "/payment/index.html";
  };

  const calculateSubtotal = () => {
    return items.reduce((total, item) => {
      const price = parseFloat(item.price.replace("$", "").replace(",", ""));
      return total + price * item.quantity;
    }, 0);
  };

  const subtotal = calculateSubtotal();
  const shipping = subtotal > 0 ? 0 : 0; // Можно добавить стоимость доставки если нужно
  const total = subtotal + shipping;

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
