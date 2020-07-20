import { put, takeLatest, select, call } from 'redux-saga/effects';
import { makeSelectLocation } from '../App/selectors';
import { setUserIdReducer, setProfileContentReducer } from './actions';
import { profileIdSelector } from './selectors';
import { getUsersProfile } from '../../services';
import * as profileConstants from './constants';

function* setInitialConfig() {
  const { pathname } = window.location;
  const id = pathname.split('/')[2];
  if (!Number.isNaN(id)) {
    yield put(setUserIdReducer(id));
    yield call(getProfileContent);
  }
}

function* getProfileContent() {
  const id = yield select(profileIdSelector);
  const content = yield call(getUsersProfile, id);
  yield put(setProfileContentReducer(content));
}

export function* profileSaga() {
  yield takeLatest(profileConstants.getStartComponentSaga, setInitialConfig);
}
