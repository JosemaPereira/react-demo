import produce from 'immer';
import { handleActions } from 'redux-actions';
import * as usersConstants from './constants';

const initialState = { currentPage: 0, list: [] };

const setCurrentPage = (state, { payload }) =>
  produce(state, draft => {
    draft.currentPage = payload;
  });

const setUserListContent = (state, { payload }) =>
  produce(state, draft => {
    draft.list = payload;
  });

export const usersReducer = produce(
  handleActions(
    {
      [usersConstants.setCurrentPageReducer]: setCurrentPage,
      [usersConstants.setUserListContent]: setUserListContent
    },
    initialState
  )
);
