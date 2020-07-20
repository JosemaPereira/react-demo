import { call, put, takeLatest, select } from 'redux-saga/effects';
import { getList, getInfoList, paginator } from '../../services';
import {
  SetPokedexListReducer,
  setPokemonSelectedReducer,
  setCurrentPageReducer,
  setPaginatorReducer
} from './actions';
import { setSelectedPokemonSaga, setNewCurrentPage } from './constants';
import { currentPageSelector } from './selectors';
import { DefaultPokedexConfig } from '../../providers';

function* setInitialConfig() {
  try {
    yield put(setCurrentPageReducer(1));
  } catch (e) {
    console.log(e);
  }
}

function* getPokeList() {
  try {
    const page = yield select(currentPageSelector);
    const list = getList(page);
    const pokeList = yield call(getInfoList, list);
    yield put(SetPokedexListReducer(pokeList));
    yield call(getPagination);
  } catch (err) {
    console.log(err);
  }
}

function* setSelectedPokemon({ payload }) {
  yield put(setPokemonSelectedReducer(payload));
}

function* getPagination() {
  const {
    paginator: { itemByPage, maxShow }
  } = DefaultPokedexConfig;

  const page = yield select(currentPageSelector);
  const opt = yield call(paginator, page, itemByPage, maxShow);
  yield put(setPaginatorReducer(opt));
}

function* newPage({ payload }) {
  try {
    yield put(setCurrentPageReducer(payload));
    yield call(getPokeList);
  } catch (e) {
    console.log(e);
  }
}

export function* pokedexSaga() {
  yield call(setInitialConfig);
  yield call(getPokeList);

  yield takeLatest(setSelectedPokemonSaga, setSelectedPokemon);
  yield takeLatest(setNewCurrentPage, newPage);
}
