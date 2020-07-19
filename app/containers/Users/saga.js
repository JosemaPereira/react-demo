import { put, takeLatest, call, select } from 'redux-saga/effects';
import { getUsersPage } from '../../services';
import { setCurrentPageReducer, setUserListContentReducer } from './actions';
import { currentPageSelector } from './selectors';

function* setInitialConfig() {
  try {
    yield put(setCurrentPageReducer(1));
  } catch (e) {
    console.log(e);
  }
}

function* getUserList() {
  const page = yield select(currentPageSelector);
  const list = yield call(getUsersPage, page);
  yield put(setUserListContentReducer(list));
}

export function* usersSaga() {
  yield call(setInitialConfig);
  yield call(getUserList);
}
