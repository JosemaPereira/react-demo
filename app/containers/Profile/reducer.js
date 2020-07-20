import produce from 'immer';
import { handleActions } from 'redux-actions';
import * as profileConstants from './constants';

const initialState = { userId: 0, content: {} };

const setUserId = (state, { payload }) =>
  produce(state, draft => {
    draft.userId = payload;
  });

const setProfileContent = (state, { payload }) =>
  produce(state, draft => {
    draft.content = payload;
  });

export const profileReducer = produce(
  handleActions(
    {
      [profileConstants.setUserIdReducer]: setUserId,
      [profileConstants.setProfileContentReducer]: setProfileContent
    },
    initialState
  )
);
