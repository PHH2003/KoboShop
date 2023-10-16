import { createSlice } from '@reduxjs/toolkit'
import { getAllCarts } from './thunk/cart.thunk'

const initialState = {
  carts: []
} as any

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const payloadProduct = action.payload
      const findProductCart = state.carts.findIndex((item: any) => {
        item.product._id == payloadProduct._id
      })
      if (findProductCart > -1) {
        state.carts[findProductCart].quantity = state.cart[findProductCart].quantity + payloadProduct.quantity
      } else {
        state.carts.push(payloadProduct)
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllCarts.fulfilled, (state: any, action:any)=>{
        state.carts = action.payload
    })
}
})

export const {actions} = cartSlice
export default cartSlice.reducer
