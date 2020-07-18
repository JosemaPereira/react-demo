import produce from 'immer';
import { handleActions } from 'redux-actions';
import * as pokedexConstants from './constants';

const initialState = { list: [], currentPage: 1 };

const setPokeList = (state, { payload }) =>
  produce(state, draft => {
    draft.list = payload;
  });

export const pokedexReducer = produce(
  handleActions(
    {
      [pokedexConstants.setPokedexListReducer]: setPokeList
    },
    initialState
  )
);
