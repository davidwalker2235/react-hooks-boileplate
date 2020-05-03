import {SET_MAIN_DATA} from '../constants/constants';
import { Actions, MainProps } from '../interfaces/appInterfaces';

const initialState: MainProps = {
  mainData: []
}

export default function mainReducer(state: MainProps = initialState, action: Actions) {
  switch (action.type) {
    case SET_MAIN_DATA:
      return { ...state, mainData: action.value };
    default:
      return state;
  }
}