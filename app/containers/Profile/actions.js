import * as profileConstants from './constants';

// Reducer
export const setUserIdReducer = payload => ({
  type: profileConstants.setUserIdReducer,
  payload
});

export const setProfileContentReducer = payload => ({
  type: profileConstants.setProfileContentReducer,
  payload
});

// Saga
const getStartComponentSaga = () => ({
  type: profileConstants.getStartComponentSaga
});

export const profileBindActions = { getStartComponentSaga };
