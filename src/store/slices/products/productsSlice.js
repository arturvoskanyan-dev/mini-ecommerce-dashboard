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
    reducers: {
        incrementProductCount: (state, action) => {
            const product = state.products.find((p) => p.id === action.payload);
            if(product) product.count += 1
        },
        decrementProductCount: (state, action) => {
            const product = state.products.find((p) => p.id === action.payload);
            if(product && product.count > 1) product.count -= 1;
        }
    },
    extraReducers: (builder) => {
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
    }
})

export const {incrementProductCount, decrementProductCount} = productsSlice.actions;
export default productsSlice.reducer;