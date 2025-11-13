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
        const updated = state.cart.filter((dt) => {
          if (dt._id === existing._id && dt.quantity) {
            return { ...dt, quantity: dt.quantity++ };
          } else {
            return dt;
          }
        });
        state.cart = updated;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
  },
});

export const { addToCart } = productSlice.actions;

export default productSlice.reducer;
