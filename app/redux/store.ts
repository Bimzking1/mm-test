import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/usersSlice";
import productReducer from "./slices/productSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    product: productReducer
  },
});

// export type RootState = ReturnType<typeof store.getState>;
export default store;
