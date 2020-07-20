import { put, takeLatest, call, select } from 'redux-saga/effects';
import { getUsersPage, paginator } from '../../services';
import {
  setCurrentPageReducer,
  setUserListContentReducer,
  setPaginatorReducer
} from './actions';
import { currentPageSelector } from './selectors';
import { DefaultUsersConfig } from '../../providers';
import { setNewCurrentPageSaga } from './constants';

function* setInitialConfig() {
  try {
    yield put(setCurrentPageReducer(1));
    yield call(getUserList);
  } catch (e) {
    console.log(e);
  }
}

function* getUserList() {
  const page = yield select(currentPageSelector);
  const list = yield call(getUsersPage, page);
  yield put(setUserListContentReducer(list));
  yield call(getPagination);
}

function* getPagination() {
  const {
    paginator: { itemByPage, maxShow }
  } = DefaultUsersConfig;

  const page = yield select(currentPageSelector);
  const opt = yield call(paginator, page, itemByPage, maxShow, 1);
  yield put(setPaginatorReducer(opt));
}

function* newPage({ payload }) {
  try {
    yield put(setCurrentPageReducer(payload));
    yield call(getUserList);
  } catch (e) {
    console.log(e);
  }
}

export function* usersSaga() {
  yield call(setInitialConfig);
  yield takeLatest(setNewCurrentPageSaga, newPage);
}
