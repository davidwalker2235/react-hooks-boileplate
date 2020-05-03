import { put, takeLatest, all } from 'redux-saga/effects';
import {LOGIN, LOGIN_RESPONSE} from '../constants/constants';

function* fetchLogin() {
  try {
    yield put({type: LOGIN_RESPONSE});
  } catch (e) {
    alert(e.message)
  }
}

function* watchLogin() {
  yield takeLatest(LOGIN, fetchLogin)
}

function* loginSagas() {
  yield all([
    watchLogin()
  ])
}

export default loginSagas;