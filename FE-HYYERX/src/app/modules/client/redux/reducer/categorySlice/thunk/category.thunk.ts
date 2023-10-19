import { createAsyncThunk } from "@reduxjs/toolkit";
import { confisAxios } from "~/app/api/config-http";


export const getAllCategorys = createAsyncThunk("category/getallcategory", async () => {
    const response = await confisAxios.get("/category")
    return response.data
})
