import { call, put, takeLatest } from 'redux-saga/effects';
import { getList, getInfoList } from '../../services';
import { SetPokedexListReducer, setPokemonSelectedReducer } from './actions';
import { setSelectedPokemonSaga } from './constants';

function* getPokeList() {
  try {
    const list = getList(1, 10);
    const pokeList = yield call(getInfoList, list);
    yield put(SetPokedexListReducer(pokeList));
  } catch (err) {
    console.log(err);
  }
}

function* setSelectedPokemon({ payload }) {
  yield put(setPokemonSelectedReducer(payload));
}

export function* pokedexSaga() {
  yield call(getPokeList);

  yield takeLatest(setSelectedPokemonSaga, setSelectedPokemon);
}
