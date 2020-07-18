import { put, takeLatest } from 'redux-saga/effects';
import {
  handleDefaultActionError,
  handleDefaultActionFinished,
  handleDefaultActionStarted
} from './actions';
import * as pokedexConstants from './constants';

function* defaultActionHandler(action) {
  yield put(handleDefaultActionStarted());

  try {
    // TODO: yield some workflow logic
  } catch (err) {
    yield put(handleDefaultActionError(err));
  }

  yield put(handleDefaultActionFinished());
}

export function* pokedexSaga() {
  yield takeLatest(pokedexConstants.DEFAULT_SAGA, defaultActionHandler);
}
