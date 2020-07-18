import * as pokedexConstants from './constants';

// Reducer
export const defaultReducer = payload => ({
  type: pokedexConstants.DEFAULT_REDUCER,
  payload
});

export const pokedexReducerActions = {
  defaultReducer
};
// Saga
export const handleDefaultAction = payload => ({
  type: pokedexConstants.DEFAULT_SAGA,
  payload
});

export const handleDefaultActionStarted = () => ({
  type: pokedexConstants.DEFAULT_SAGA_STARTED
});

export const handleDefaultActionError = payload => ({
  type: pokedexConstants.DEFAULT_SAGA_ERROR,
  payload
});

export const handleDefaultActionFinished = () => ({
  type: pokedexConstants.DEFAULT_SAGA_FINISHED
});

export const pokedexBindActions = {
  handleDefaultAction
};

