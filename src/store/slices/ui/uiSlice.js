import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isCartOpen: false,
}

const uiSlice = createSlice({
    name: "uiSlice",
    initialState,
    reducers: {
        openCart(state) {
            state.isCartOpen = true
        },
        closeCart(state) {
            state.isCartOpen = false;
        }
    }
})

export const {openCart, closeCart} = uiSlice.actions;
export default uiSlice.reducer;