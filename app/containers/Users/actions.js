import * as usersConstants from './constants';

// Reducer
export const setCurrentPageReducer = payload => ({
  type: usersConstants.setCurrentPageReducer,
  payload
});

export const setUserListContentReducer = payload => ({
  type: usersConstants.setUserListContent,
  payload
});

export const usersBindActions = {};
