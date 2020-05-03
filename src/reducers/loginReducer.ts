import {LOGIN_RESPONSE} from '../constants/constants';
import {Actions, LoginProps} from '../interfaces/appInterfaces';

const initialState: LoginProps = {
  isLogged: false,
}

export default function homeReducer(state: LoginProps = initialState, action: Actions) {
  switch (action.type) {
    case LOGIN_RESPONSE:
      return { ...state, isLogged: true };
    default:
      return state;
  }
}