import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductData } from "../utils/getProductData";

interface WishlistState {
  items: ProductData[];
  isOpen: boolean
}

const initialState: WishlistState = {
  items: [],
  isOpen: false,
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<ProductData>) => {
      const exists = state.items.find((item) => item.index === action.payload.index);
      if (!exists) {
        state.items.push(action.payload);
      }
    },
    removeFromWishlist: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.index !== action.payload);
    },
    toggleFilter: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeFilter: (state) => {
      state.isOpen = false;
    },
  },
});

export const { addToWishlist, removeFromWishlist, closeFilter, toggleFilter } = wishlistSlice.actions;

export default wishlistSlice.reducer;
