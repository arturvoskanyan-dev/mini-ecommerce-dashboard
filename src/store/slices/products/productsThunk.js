import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../api/api";

export const getProducts = createAsyncThunk(
    "get/products",
    async (_, { rejectWithValue }) => {
        try {
            const response = await API.getProducts();
            if (!response.ok) throw new Error("Failed to fetch products");
            const data = await response.json();
            
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const getProductById = createAsyncThunk(
    "get/product/id",
    async (id, {rejectWithValue}) => {
        try {
            const response = await API.getProductById(id);
            if(!response.ok) throw new Error(`Failed to fetch product with ${id}`)
            const data = await response.json();

            return data;
        } catch(error) {
            return rejectWithValue(error.message);
        }
    }
)