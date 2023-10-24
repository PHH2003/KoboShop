import { createAsyncThunk } from "@reduxjs/toolkit"
import { confisAxios } from "~/app/api/config-http"

export const getAllComments = createAsyncThunk("comment/getallcomment", async (id: any) => {
    const response = await confisAxios.get(`/comment/${id}`)
    return response.data
})