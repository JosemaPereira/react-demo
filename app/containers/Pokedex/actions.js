import * as pokedexConstants from './constants';

// Reducer
export const SetPokedexListReducer = payload => ({
  type: pokedexConstants.setPokedexListReducer,
  payload
});

export const setPokemonSelectedReducer = payload => ({
  type: pokedexConstants.setSelectedPokemonReducer,
  payload
});

export const setCurrentPageReducer = payload => ({
  type: pokedexConstants.setCurrentPageReducer,
  payload
});

export const setPaginatorReducer = payload => ({
  type: pokedexConstants.setPaginatorReducer,
  payload
});
// Sagas
const setPokemonSelectedSaga = payload => ({
  type: pokedexConstants.setSelectedPokemonSaga,
  payload
});

const setNewCurrentPageSaga = payload => ({
  type: pokedexConstants.setNewCurrentPage,
  payload
});

export const pokedexBindActions = {
  setPokemonSelectedSaga,
  setNewCurrentPageSaga
};
