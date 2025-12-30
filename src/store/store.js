import {configureStore} from "@reduxjs/toolkit";
import productsReducer from "./slices/products/productsSlice";
import cartReducer from "./slices/cart/cartSlice";
import uiReducer from "./slices/ui/uiSlice";

const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        ui: uiReducer
    }
})

export default store;