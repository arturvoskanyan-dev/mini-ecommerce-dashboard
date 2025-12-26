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