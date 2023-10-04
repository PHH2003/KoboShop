import { combineReducers } from "redux";
import productReducer from './productSlice/productSlice';

export const clientReducer = combineReducers({
    productReducer
})