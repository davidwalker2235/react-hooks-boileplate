import { all } from 'redux-saga/effects';
import homeSagas from './homeSagas';
import listSagas from './listSagas';
import personSagas from './personSagas';
import filterSagas from './filterSagas';
import loginSagas from "./loginSagas";

export default function* rootSaga() {
  yield all([
    loginSagas(),
    homeSagas(),
    listSagas(),
    personSagas(),
    filterSagas()
  ])
}