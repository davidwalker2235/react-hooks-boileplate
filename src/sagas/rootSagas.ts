import { all } from 'redux-saga/effects';
import mainSagas from './mainSagas';
import loginSagas from "./loginSagas";

export default function* rootSaga() {
  yield all([
    loginSagas(),
    mainSagas()
  ])
}