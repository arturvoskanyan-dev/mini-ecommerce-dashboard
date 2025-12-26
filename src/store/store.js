import {configureStore} from "@reduxjs/toolkit";
import productsReducer from "./slices/products/productsSlice";
import cartReducer from "./slices/cart/cartSlice";

const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer
    }
})

export default store;