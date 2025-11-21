import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IProduct } from "../../Modules/Home/Models/HomeModels";
export interface IProductSlice {
  cart: IProduct[];
}
const initialState: IProductSlice = {
  cart: [],
};
export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
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
    },
  },
});

export const { addToCart } = productSlice.actions;

export default productSlice.reducer;
