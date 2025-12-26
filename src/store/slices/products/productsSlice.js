import { createSlice } from "@reduxjs/toolkit"
import { getProducts } from "./productsThunk"

const initialState = {
    products: [],
    loading: false,
    error: null
}

const productsSlice = createSlice({
    name: "productsSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getProducts.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.loading = false;
        })
        .addCase(getProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    }
})

export default productsSlice.reducer;