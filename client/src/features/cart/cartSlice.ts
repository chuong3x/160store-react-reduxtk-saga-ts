import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { ProductPayload } from "components/Common/ProductInfo";
import { addProduct, removeProduct } from "utils/handleCartProduct";

interface CartState {
  products: ProductPayload[];
}

const initialState: CartState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartProduct: (state, action: PayloadAction<ProductPayload[]>) => {
      state.products = action.payload;
    },
    add: (state, action: PayloadAction<ProductPayload>) => {
      const { product_id, size, color } = action.payload;
      const newproduct_id = `${color.toUpperCase()}-${product_id.slice(
        4,
        8
      )} / ${size}`;
      const payload = { ...action.payload, product_id: newproduct_id };
      const newproducts = addProduct(payload);
      state.products = newproducts;
    },
    remove: (state, action: PayloadAction<string>) => {
      const newproducts = removeProduct(action.payload);
      state.products = newproducts;
    },
    checkout: (state) => {},
  },
});

//Actions
export const cartActions = cartSlice.actions;

//Selectors
export const selectCartProducts = (state: RootState) => state.cart.products;

//Reducer
const cartReducer = cartSlice.reducer;

export default cartReducer;
