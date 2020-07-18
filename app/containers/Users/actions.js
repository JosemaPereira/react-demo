import * as usersConstants from './constants';

// Reducer
export const defaultReducer = payload => ({
  type: usersConstants.DEFAULT_REDUCER,
  payload
});

export const usersReducerActions = {
  defaultReducer
};
// Saga
export const handleDefaultAction = payload => ({
  type: usersConstants.DEFAULT_SAGA,
  payload
});

export const handleDefaultActionStarted = () => ({
  type: usersConstants.DEFAULT_SAGA_STARTED
});

export const handleDefaultActionError = payload => ({
  type: usersConstants.DEFAULT_SAGA_ERROR,
  payload
});

export const handleDefaultActionFinished = () => ({
  type: usersConstants.DEFAULT_SAGA_FINISHED
});

export const usersBindActions = {
  handleDefaultAction
};

