import { createSlice } from "@reduxjs/toolkit"

// initial cart from localStorage
const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

const initialState = {
    products: savedCart,
    totalAmount: 0
}

const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const productItem = state.products.find((product) => product.id === action.payload.id);

            if (productItem) {
                productItem.count += 1
            } else {
                state.products.push({ ...action.payload })
            }

            // update localStorage
            localStorage.setItem("cart", JSON.stringify(state.products))
        },
        incrementCartItem: (state, action) => {
            const product = state.products.find((p) => p.id === action.payload);

            if(product) {
                product.count += 1;
                localStorage.setItem("cart", JSON.stringify(state.products));
            }
        },
        decrementCartItem: (state, action) => {
            const product = state.products.find((p) => p.id === action.payload);

            if(product && product.count > 1) {
                product.count -= 1;
                localStorage.setItem("cart", JSON.stringify(state.products));
            }
        },
        removeCart: (state, action) => {
            state.products = state.products.filter((product) => product.id !== action.payload);
            localStorage.setItem("cart", JSON.stringify(state.products));
        },
        clearCart: (state) => {
            state.products = [];
            localStorage.removeItem("cart");
        }
    }
})

export const { addToCart, incrementCartItem, decrementCartItem, removeCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;