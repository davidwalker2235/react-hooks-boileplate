import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import mainReduder from './mainReducer';
import loadingReducer from './loadingReducer';
import modalReducer from './modalReducer';
import loginReducer from "./loginReducer";

const rootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  login: loginReducer,
  main: mainReduder,
  loading: loadingReducer,
  modal: modalReducer,
})

export default rootReducer;