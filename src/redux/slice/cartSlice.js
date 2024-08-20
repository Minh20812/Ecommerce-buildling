import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "products",
  initialState: {
    CartArr: [],
  },
  reducers: {
    addProduct: (state, action) => {
      const productIndex = state.CartArr.findIndex(
        (p) => p.id === action.payload.id
      );
      if (productIndex === -1) {
        state.CartArr.push({ ...action.payload, quantity: 1 });
      } else {
        state.CartArr[productIndex].quantity += 1;
      }
    },
    deleteProduct: (state, action) => {
      const productIndex = state.CartArr.findIndex(
        (item) => item.id === action.payload.id
      );
      if (productIndex !== -1) {
        if (state.CartArr[productIndex].quantity > 1) {
          state.CartArr[productIndex].quantity -= 1;
        } else {
          state.CartArr = state.CartArr.filter(
            (item) => item.id !== action.payload.id
          );
        }
      }
    },
    // removeProduct: (state, action) => {
    //   // action is added here
    //   const productIndexRemove = action.payload.id;
    //   state.CartArr = state.CartArr.filter(
    //     (item) => item.id !== productIndexRemove
    //   );
    // },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, deleteProduct } = ProductSlice.actions;

export default ProductSlice.reducer;
