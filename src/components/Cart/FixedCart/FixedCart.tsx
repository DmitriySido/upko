import { useDispatch, useSelector } from "react-redux";
import {toggleCart} from "../../../store/cartSlice";
import './FixedCart.css'
import { RootState } from "../../../store/store";

const FixedCart = () => {
  const dispatch = useDispatch();
  const {items} = useSelector((state: RootState) => state.cart);
  const itemsCount = items.reduce((total, item) => total + item.quantity, 0);

  const IconCart = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="8" cy="19" r="1.5" fill="#000" />
    <circle cx="16" cy="19" r="1.5" fill="#000" />
    <path
      d="M2 2H4L6.68 14.39C6.87 15.28 7.63 16 8.54 16H17.5C18.33 16 19.04 15.36 19.18 14.54L20.54 6.54C20.68 5.72 20.04 5 19.22 5H5.21"
      stroke="#000"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

  return(
    <div className="fixed-cart">
      <button
              onClick={() => dispatch(toggleCart())}
              title="Cart"
              className="icon-animate-parent text-white flex items-center transition-colors duration-200 hover:text-hero-hover relative fixed-cart-button"
              style={{color: "white"}}
            >
              <IconCart />
              {itemsCount > 0 && (
                <span className="absolute -top-0 right-1 bg-[#c6b491] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemsCount}
                </span>
              )}
            </button>
    </div>
  )
}

export default FixedCart
