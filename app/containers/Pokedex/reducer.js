import produce from 'immer';
import { handleActions } from 'redux-actions';
import * as pokedexConstants from './constants';

const initialState = { list: [], currentPage: 1, selected: {}, paginator: {} };

const setCurrentPage = (state, { payload }) =>
  produce(state, draft => {
    draft.currentPage = payload;
  });

const setPokeList = (state, { payload }) =>
  produce(state, draft => {
    draft.list = payload;
  });

const setPokemonSelected = (state, { payload }) =>
  produce(state, draft => {
    draft.selected = payload;
  });

const setPaginator = (state, { payload }) =>
  produce(state, draft => {
    draft.paginator = payload;
  });

export const pokedexReducer = produce(
  handleActions(
    {
      [pokedexConstants.setCurrentPageReducer]: setCurrentPage,
      [pokedexConstants.setPokedexListReducer]: setPokeList,
      [pokedexConstants.setSelectedPokemonReducer]: setPokemonSelected,
      [pokedexConstants.setPaginatorReducer]: setPaginator
    },
    initialState
  )
);
