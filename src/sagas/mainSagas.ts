import { put, takeLatest, all, call } from 'redux-saga/effects';
import { GET_MAIN_DATA } from '../constants/constants';
import { GET_DATA_URI } from '../shared/urls';
import { getData } from '../services/axios';
import { hideLoading, showLoading } from '../actions/loadingActions';
import { setMainData } from '../actions/mainActions';

function* fetchGetMainlData() {
  try {
    yield put(showLoading());
    const userData = yield call(getData, {type: 'get', url: GET_DATA_URI});
    yield put(setMainData(userData));
    yield put(hideLoading());
  } catch (e) {
    alert(e.message)
  }
}

function* watchGetMainData() {
  yield takeLatest(GET_MAIN_DATA, fetchGetMainlData)
}

function* mainSagas() {
  yield all([
    watchGetMainData()
  ])
}

export default mainSagas;

