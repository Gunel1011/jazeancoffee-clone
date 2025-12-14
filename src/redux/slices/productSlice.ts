import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IProduct } from "../../Modules/Home/Models/HomeModels";

export interface ICartProduct extends IProduct {
  quantity: number;
}
export interface IProductSlice {
  cart: ICartProduct[];
  cartCount: number;
  price: number;
  totalPrice: number;
}
const addCartLocalStorage = (): ICartProduct[] => {
  try {
    const serializedCar = localStorage.getItem("cart");
    return serializedCar ? JSON.parse(serializedCar) : [];
  } catch (error) {
    return [];
  }
};
const loadCartCountFromLocalStorage = (): number => {
  try {
    const count = localStorage.getItem("cartCount");
    return count ? parseInt(count) : 0;
  } catch {
    return 0;
  }
};
const savedCartLocalStorage = (cart: ICartProduct[], cartCount: number) => {
  try {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("cartCount", cartCount.toString());
  } catch {}
};
const initialState: IProductSlice = {
  cart: addCartLocalStorage(),
  cartCount: loadCartCountFromLocalStorage(),
  price: 0,
  totalPrice: 0,
};
export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    calculateCartCount: (state) => {
      state.cartCount = state.cart.reduce(
        (acc, curr) => acc + curr.quantity,
        0
      );
    },
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const quantityToAdd = action.payload.quantity || 1;
      const existing = state.cart.find(
        (item) => item._id === action.payload._id
      );
      if (existing) {
        existing.quantity += quantityToAdd;
      } else {
        state.cart.push({ ...action.payload, quantity: quantityToAdd });
      }
      state.price = state.cart.reduce(
        (acc, curr) => acc + curr.price * curr.quantity,
        0
      );
      productSlice.caseReducers.calculateCartCount(state);
      savedCartLocalStorage(state.cart, state.cartCount);
      state.totalPrice = state.price * 1.05;
    },
    removeCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
      state.price = state.cart.reduce(
        (acc, curr) => acc + curr.price * curr.quantity,
        0
      );
      productSlice.caseReducers.calculateCartCount(state);
      savedCartLocalStorage(state.cart, state.cartCount);
      state.totalPrice = state.price * 1.05;
    },
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const existing = state.cart.find((item) => item._id === action.payload);
      if (existing) {
        state.cart = state.cart.filter((item) => {
          if (item._id === existing._id) {
            return { ...item, quantity: item.quantity++ };
          } else {
            return item;
          }
        });
      }
      state.price = state.cart.reduce(
        (acc, curr) => acc + curr.price * curr.quantity,
        0
      );
      productSlice.caseReducers.calculateCartCount(state);
      savedCartLocalStorage(state.cart, state.cartCount);
      state.totalPrice = state.price * 1.05;
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const existing = state.cart.find((item) => item._id === action.payload);
      if (existing) {
        state.cart = state.cart.filter((item) => {
          if (item._id === existing._id) {
            return {
              ...item,
              quantity: item.quantity > 1 ? item.quantity-- : item.quantity,
            };
          } else {
            return item;
          }
        });
      }
      state.price = state.cart.reduce(
        (acc, curr) => acc + curr.price * curr.quantity,
        0
      );
      state.totalPrice = state.price * 1.05;
      productSlice.caseReducers.calculateCartCount(state);
      savedCartLocalStorage(state.cart, state.cartCount);
    },
  },
});
export const {
  addToCart,
  removeCart,
  calculateCartCount,
  incrementQuantity,
  decrementQuantity,
} = productSlice.actions;

export default productSlice.reducer;
