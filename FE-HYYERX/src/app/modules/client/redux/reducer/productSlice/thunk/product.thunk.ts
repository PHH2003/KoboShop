import { createAsyncThunk } from "@reduxjs/toolkit";
import { confisAxios } from "~/app/api/config-http";


export const getAllProducts = createAsyncThunk("product/getallproduct", async () => {
    const response = await confisAxios.get("/product")
    return response.data
})

export const getProductById = createAsyncThunk('product/getProductById', async (productId: any) => {
    const response = await confisAxios.get('/product/' + productId)
    return response.data
})

export const getProductByCategory = createAsyncThunk('/product/getProductByCategory', async(categoryId:any) => {
    const response = await confisAxios.get('/product/bycategory/' + categoryId);
    return response.data
})