import { getAllProducts, getProductById } from '../reducer/productSlice/thunk/product.thunk';
import { shallowEqual } from "react-redux"
import { useAppDispatch, useAppSelector } from "~/app/store/hook"
import {actions as productActions} from '../reducer/productSlice/productSlice'
import { useMemo } from "react";
import { bindActionCreators } from "redux";

export const useProductRedux = () =>{
    const data = useAppSelector((state: any)=> state.clientReducer.productReducer as any, shallowEqual)
    const dispatch = useAppDispatch()
    const allActions = {
        ...productActions,
        getAllProducts,
        getProductById
    }
    const actions = useMemo(()=> bindActionCreators(allActions, dispatch), [dispatch])

    return {data, actions}
}