import produce from 'immer';
import { handleActions } from 'redux-actions';
import * as usersConstants from './constants';

const initialState = { };

const defaultHandler = (state, action) => state;

export const usersReducer = produce(
  handleActions(
    {
      [usersConstants.DEFAULT_REDUCER]: defaultHandler
    },
    initialState
  )
);
