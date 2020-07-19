import produce from 'immer';
import { handleActions } from 'redux-actions';
import * as pokedexConstants from './constants';

const initialState = { list: [], currentPage: 1, selected: {} };

const setPokeList = (state, { payload }) =>
  produce(state, draft => {
    draft.list = payload;
  });

const setPokemonSelected = (state, { payload }) =>
  produce(state, draft => {
    draft.selected = payload;
  });

export const pokedexReducer = produce(
  handleActions(
    {
      [pokedexConstants.setPokedexListReducer]: setPokeList,
      [pokedexConstants.setSelectedPokemonReducer]: setPokemonSelected
    },
    initialState
  )
);
