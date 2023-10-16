import { createAsyncThunk } from "@reduxjs/toolkit";
import { confisAxios } from "~/app/api/config-http";

export const getAllCarts = createAsyncThunk("cart/getallcart", async () => {
    const response = await confisAxios.get("/cart")
    return response.data
})
