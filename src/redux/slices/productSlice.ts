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
const loadCartFromLocalStorage = (): ICartProduct[] => {
  try {
    const serializedCart = localStorage.getItem("cart");
    return serializedCart ? JSON.parse(serializedCart) : [];
  } catch (error) {
    return [];
  }
};
const loadNumberFromLocalStorage = (key: string): number => {
  try {
    const item = localStorage.getItem(key);
    return item ? parseFloat(item) : 0;
  } catch {
    return 0;
  }
};
const saveToLocalStorage = (state: IProductSlice) => {
  try {
    localStorage.setItem("cart", JSON.stringify(state.cart));
    localStorage.setItem("cartCount", state.cartCount.toString());
    localStorage.setItem("price", state.price.toString());
    localStorage.setItem("totalPrice", state.totalPrice.toString());
  } catch (e) {
    console.error("LocalStorage save error:", e);
  }
};
const calculateAndSaveTotals = (state: IProductSlice) => {
  state.price = state.cart.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );
  state.totalPrice = state.price * 1.05;
  state.cartCount = state.cart.reduce((acc, curr) => acc + curr.quantity, 0);
  saveToLocalStorage(state);
};
const initialState: IProductSlice = {
  cart: loadCartFromLocalStorage(),
  cartCount: loadNumberFromLocalStorage("cartCount"),
  price: loadNumberFromLocalStorage("price"),
  totalPrice: loadNumberFromLocalStorage("totalPrice"),
};
export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    calculateCartCount: (state) => {
      calculateAndSaveTotals(state);
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
      calculateAndSaveTotals(state);
    },
    resetCart: (state) => {
      state.cart = [];
      state.totalPrice = 0;
      state.cartCount = 0;
      state.price = 0;
    },
    removeCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
      calculateAndSaveTotals(state);
    },
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const existing = state.cart.find((item) => item._id === action.payload);
      if (existing) {
        existing.quantity++;
      }
      calculateAndSaveTotals(state);
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const existing = state.cart.find((item) => item._id === action.payload);
      if (existing && existing.quantity > 1) {
        existing.quantity--;
      }
      calculateAndSaveTotals(state);
    },
  },
});
export const {
  addToCart,
  removeCart,
  calculateCartCount,
  incrementQuantity,
  decrementQuantity,
  resetCart,
} = productSlice.actions;

export default productSlice.reducer;
