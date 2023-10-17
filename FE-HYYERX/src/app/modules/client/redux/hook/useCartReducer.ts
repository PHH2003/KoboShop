import { shallowEqual } from "react-redux"
import { useAppDispatch, useAppSelector } from "~/app/store/hook"
import {actions as cartActions} from '../reducer/cartSlice/cartSlice'
import { useMemo } from "react";
import { bindActionCreators } from "redux";
import { getAllCarts } from '../reducer/cartSlice/thunk/cart.thunk';

export const useCartRedux = () =>{
    const data = useAppSelector((state: any)=> state.clientReducer.cartReducer as any, shallowEqual)
    const dispatch = useAppDispatch()
    const allActions = {
        ...cartActions,
        getAllCarts,
    }
    const actions = useMemo(()=> bindActionCreators(allActions, dispatch), [dispatch])

    return {data, actions}
}