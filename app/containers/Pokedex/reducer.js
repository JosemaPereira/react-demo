import produce from 'immer';
import { handleActions } from 'redux-actions';
import * as pokedexConstants from './constants';

const initialState = { };

const defaultHandler = (state, action) => state;

export const pokedexReducer = produce(
  handleActions(
    {
      [pokedexConstants.DEFAULT_REDUCER]: defaultHandler
    },
    initialState
  )
);
