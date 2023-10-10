import { createSlice } from "@reduxjs/toolkit"
import { getAllProducts, getProductById } from "./thunk/product.thunk"


const initialState ={
    products:[],
    product: {}
} as any

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.fulfilled, (state: any, action:any)=>{
            state.products = action.payload
        }),
        builder.addCase(getProductById.fulfilled, (state: any, action: any) => {
            state.product = action.payload
        }) 
    }
})

export const {actions} = productSlice
export default productSlice.reducer