import { createSlice,nanoid } from "@reduxjs/toolkit";

export interface Product {
  items: ItemsI[];
}

export interface ItemsI {
  id: string;
  name: string;
  price: number;
  stock: number;
}

const initialState: Product = {
  items: [
    { 
      id: nanoid(), 
      name: "Iphone 16",
      price: 25000000,
      stock: 5
    }
  ]
}

const productSlice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {
    addProduct: (state, action) => {
      const { name, price, stock } = action.payload;
      state.items.push({ id: nanoid(), name, price, stock });
    },
    deleteProduct: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    }
  }
});

export const { addProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;
