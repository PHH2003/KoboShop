import { createSlice } from "@reduxjs/toolkit"
import { getAllOrders } from "./thunk/order.thunk"

const initialState = {
    orders: []
} as any

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getAllOrders.fulfilled, (state: any, action: any) => {
            state.orders = action.payload
        })
    }
})

export const { actions } = orderSlice
export default orderSlice.reducer