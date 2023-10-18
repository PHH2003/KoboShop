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
    },
    updateQuantityCart: (state, action) =>{
      const {itemProductCart, quantityOrder, newDataInput} = action.payload
      const filterItemCart = state.carts.findIndex((item: any)=> item._id == itemProductCart._id)
      switch (action.payload.type) {
        case 'INCREMENT':
          if(itemProductCart.quantity < itemProductCart.product.quantity){
            state.carts[filterItemCart].quantity += 1
          }
          break;
        case 'DECREMENT':
          if(itemProductCart.quantity ==1 ){
            state.carts[filterItemCart].quantity = 1
          }
          else{
            state.carts[filterItemCart].quantity -= 1
          }
          break;
        case 'INPUTCHANGE':
          if(newDataInput > itemProductCart.product.quantity){
            state.carts[filterItemCart].quantity = itemProductCart?.product?.quantity
          }
          if(newDataInput < 1) {
            state.carts[filterItemCart].quantity = 1
          }
          break;
        default:
          break;
      }
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
