import { shallowEqual } from "react-redux"
import { useAppDispatch, useAppSelector } from "~/app/store/hook"
import {actions as categoryActions} from '../reducer/categorySlice/categorySlice'
import { useMemo } from "react";
import { bindActionCreators } from "redux";
import { getAllCategorys } from '../reducer/categorySlice/thunk/category.thunk';

export const usePCategoryRedux = () =>{
    const data = useAppSelector((state: any)=> state.clientReducer.categoryReducer as any, shallowEqual)
    const dispatch = useAppDispatch()
    const allActions = {
        ...categoryActions,
        getAllCategorys,
    }
    const actions = useMemo(()=> bindActionCreators(allActions, dispatch), [dispatch])

    return {data, actions}
}