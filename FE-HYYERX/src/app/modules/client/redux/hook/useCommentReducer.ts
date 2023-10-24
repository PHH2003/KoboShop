import { shallowEqual } from 'react-redux'
import { actions as commentActions } from '../reducer/comment/commentSlice';
import { useMemo } from 'react';
import { bindActionCreators } from 'redux'
import { getAllComments } from './../reducer/comment/thunk/comment.thunk';
import { useAppDispatch, useAppSelector } from '~/app/store/hook';

export const useCommentRedux = () => {
    const data = useAppSelector((state: any) => state.clientReducer.commentReducer as any, shallowEqual)
    const dispatch = useAppDispatch()
    const allActions = {
        ...commentActions,
        getAllComments
    }
    const actions = useMemo(() => bindActionCreators(allActions, dispatch), [dispatch])

    return {
        data, actions
    }
}