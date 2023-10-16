import { combineReducers } from "redux";
import productReducer from './productSlice/productSlice';
import cartReducer from './cartSlice/cartSlice'
export const clientReducer = combineReducers({
    productReducer,
    cartReducer
})