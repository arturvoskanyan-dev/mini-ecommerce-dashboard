import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../api/api";

export const getProducts = createAsyncThunk(
    "get/products",
    async() => {
        const response = await API.getProducts();
        const data = await response.json();

        return data;
    }
)

export const getProductById = createAsyncThunk(
    "get/product/id",
    async(id) => {
        const response = await API.getProductById(id);
        const data = await response.json();

        return data;
    }
)