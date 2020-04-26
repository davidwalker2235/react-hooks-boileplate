import {GET_GLOBAL_DATA, SET_GLOBAL_DATA} from '../constants/constants';
import { Actions } from '../interfaces/appInterfaces';
import { Brastlewark } from '../interfaces/appInterfaces';

export const getGlobalData = (): Actions => (
  {type: GET_GLOBAL_DATA});

export const setGlobalData = (globalData: Brastlewark[]): Actions => (
  {type: SET_GLOBAL_DATA, value: globalData});