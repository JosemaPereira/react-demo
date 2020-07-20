import * as usersConstants from './constants';

// Reducer
export const setCurrentPageReducer = payload => ({
  type: usersConstants.setCurrentPageReducer,
  payload
});

export const setUserListContentReducer = payload => ({
  type: usersConstants.setUserListContentReducer,
  payload
});

export const setPaginatorReducer = payload => ({
  type: usersConstants.setPaginatorReducer,
  payload
});

// Saga
const setNewCurrentPageSaga = payload => ({
  type: usersConstants.setNewCurrentPageSaga,
  payload
});

export const usersBindActions = { setNewCurrentPageSaga };
