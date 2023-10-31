import { shallowEqual } from 'react-redux'
import { actions as orderActions } from '../reducer/orderSlice/orderSlice';
import { useMemo } from 'react';
import { bindActionCreators } from 'redux'
import { useAppDispatch, useAppSelector } from '~/app/store/hook';
import { getAllOrders } from '../reducer/orderSlice/thunk/order.thunk';

export const useOrderRedux = () => {
    const data = useAppSelector((state: any) => state.clientReducer.orderReducer as any, shallowEqual)
    const dispatch = useAppDispatch()
    const allActions = {
        ...orderActions,
        getAllOrders
    }
    const actions = useMemo(() => bindActionCreators(allActions, dispatch), [dispatch])

    return {
        data, actions
    }
}