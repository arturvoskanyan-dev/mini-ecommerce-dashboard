import { createSlice } from "@reduxjs/toolkit"
import { getProductById, getProducts } from "./productsThunk"

const initialState = {
    products: [],
    selectedProduct: {},
    loading: false,
    error: null,
}

const productsSlice = createSlice({
    name: "productsSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // getProducts
        builder
        .addCase(getProducts.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            // add a count to each product
            state.products = action.payload.map((product) => ({...product, count: 1}));
            state.loading = false;
        })
        .addCase(getProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })

        // getProductById
        builder
        .addCase(getProductById.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getProductById.fulfilled, (state, action) => {
            state.selectedProduct = {...action.payload, count: 1};
            state.loading = false;
        })
        .addCase(getProductById.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    }
})

export default productsSlice.reducer;