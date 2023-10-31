import { createAsyncThunk } from "@reduxjs/toolkit";
import { confisAxios } from "~/app/api/config-http";

export const getAllOrders = createAsyncThunk("order/getallorder", async () => {
    const response = await confisAxios.get("/order")
    return response.data
})