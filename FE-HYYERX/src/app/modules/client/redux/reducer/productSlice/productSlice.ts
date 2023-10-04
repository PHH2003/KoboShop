import { createSlice } from "@reduxjs/toolkit"
import { getAllProducts } from "./thunk/product.thunk"


const initialState ={
    products:[]
} as any

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.fulfilled, (state: any, action:any)=>{
            state.products = action.payload
        }) 
    }
})

export const {actions} = productSlice
export default productSlice.reducer