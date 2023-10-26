import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    orders: []
} as any

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
    }
})

export const { actions } = orderSlice
export default orderSlice.reducer