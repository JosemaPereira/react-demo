import { call, put } from 'redux-saga/effects';
import { getList, getInfoList } from '../../services';
import { SetPokedexListReducer } from './actions';

function* getPokeList() {
  try {
    const list = getList(1, 10);
    const pokeList = yield call(getInfoList, list);
    yield put(SetPokedexListReducer(pokeList));
  } catch (err) {
    console.log(err);
  }
}

export function* pokedexSaga() {
  yield call(getPokeList);
}
