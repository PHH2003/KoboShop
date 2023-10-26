import { createSlice } from '@reduxjs/toolkit'
import { getAllCarts } from './thunk/cart.thunk'

const initialState = {
  carts: [],
  listBuyProduct: JSON.parse(localStorage.getItem("productSelectCart")!) || []
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
    selectProductCartBuy: (state, action) => {
      const buyProduct = action.payload
      if (state.listBuyProduct.flatMap((item: any) => item._id).includes(buyProduct?._id)) {
          const index = state.listBuyProduct.findIndex((item: any) => item._id == buyProduct?._id)
          state.listBuyProduct.splice(index, 1)
      }
      else {
          state.listBuyProduct.push(buyProduct)
      }

      localStorage.setItem("productSelectCart", JSON.stringify(state.listBuyProduct))

    },
    selectProductCartBuyAll: (state) => {
      const productBuy = state.listBuyProduct.length == state.carts.length
      if (productBuy) {
          localStorage.removeItem("productSelectCart")
          state.listBuyProduct = []
      }
      else {
          state.listBuyProduct = [...state.carts]
          localStorage.setItem("productSelectCart", JSON.stringify(state.listBuyProduct))
      }
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
          if(newDataInput < itemProductCart?.product?.quantity){
            state.carts[filterItemCart].quantity = newDataInput 
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
