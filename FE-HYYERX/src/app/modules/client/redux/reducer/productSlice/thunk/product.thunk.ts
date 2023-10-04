import { createAsyncThunk } from "@reduxjs/toolkit";
import { confisAxios } from "~/app/api/config-http";


export const getAllProducts = createAsyncThunk("product/getallproduct", async () => {
    const response = await confisAxios.get("/product")
    return response.data
})