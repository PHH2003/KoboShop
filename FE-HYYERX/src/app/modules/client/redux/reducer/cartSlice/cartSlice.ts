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
        item.product._id == payloadProduct.product._id
      })
      if (findProductCart > -1) {
        state.carts[findProductCart].quantity = state.carts[findProductCart].quantity + payloadProduct.quantity
      } else {
        state.carts.push(payloadProduct)
      }
    },
    deleteProductTocarts: (state, action) => {
      const productId = action.payload
      state.carts = state.carts.filter((item: any) => item._id != productId)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllCarts.fulfilled, (state: any, action: any) => {
      state.carts = action.payload.carts
    })
  }
})

export const { actions } = cartSlice
export default cartSlice.reducer
