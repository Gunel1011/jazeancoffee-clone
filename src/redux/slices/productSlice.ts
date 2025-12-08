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
const initialState: IProductSlice = {
  cart: [],
  cartCount: 0,
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
      const existing = state.cart.find(
        (item) => item._id === action.payload._id
      );
      if (existing) {
        state.cart = state.cart.filter((item) => {
          if (item._id === existing._id && item.quantity) {
            return { ...item, quantity: item.quantity++ };
          } else {
            return item;
          }
        });
      } else {
        state.cart = [...state.cart, { ...action.payload, quantity: 1 }];
      }
      state.totalPrice = state.cart.reduce(
        (acc, curr) => acc + curr.price * curr.quantity,
        0
      );
      productSlice.caseReducers.calculateCartCount(state);
    },
    removeCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
      state.totalPrice = state.cart.reduce(
        (acc, curr) => acc + curr.price * curr.quantity,
        0
      );
      productSlice.caseReducers.calculateCartCount(state);
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
      state.totalPrice = state.cart.reduce(
        (acc, curr) => acc + curr.price * curr.quantity,
        0
      );
      productSlice.caseReducers.calculateCartCount(state);
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
      state.totalPrice = state.cart.reduce(
        (acc, curr) => acc + curr.price * curr.quantity,
        0
      );
      productSlice.caseReducers.calculateCartCount(state);
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
