import { createSlice } from "@reduxjs/toolkit"
import { getAllCategorys } from "./thunk/category.thunk"

const initialState ={
    categorys:[],
    category: {}
} as any

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getAllCategorys.fulfilled, (state: any, action:any)=>{
            state.categorys = action.payload
        })
    }
})

export const {actions} = categorySlice
export default categorySlice.reducer