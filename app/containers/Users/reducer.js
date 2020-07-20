import produce from 'immer';
import { handleActions } from 'redux-actions';
import * as usersConstants from './constants';

const initialState = { currentPage: 0, list: [], paginator: [] };

const setCurrentPage = (state, { payload }) =>
  produce(state, draft => {
    draft.currentPage = payload;
  });

const setUserListContent = (state, { payload }) =>
  produce(state, draft => {
    draft.list = payload;
  });

const setPaginator = (state, { payload }) =>
  produce(state, draft => {
    draft.paginator = payload;
  });

export const usersReducer = produce(
  handleActions(
    {
      [usersConstants.setCurrentPageReducer]: setCurrentPage,
      [usersConstants.setUserListContentReducer]: setUserListContent,
      [usersConstants.setPaginatorReducer]: setPaginator
    },
    initialState
  )
);
