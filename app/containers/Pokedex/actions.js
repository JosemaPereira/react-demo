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

// Sagas
const setPokemonSelectedSaga = payload => ({
  type: pokedexConstants.setSelectedPokemonSaga,
  payload
});

export const pokedexBindActions = { setPokemonSelectedSaga };
