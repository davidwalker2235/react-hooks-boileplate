import { GET_MAIN_DATA, SET_MAIN_DATA } from '../constants/constants';
import { Actions } from '../interfaces/appInterfaces';
import { Response } from '../interfaces/appInterfaces';

export const getMainData = (): Actions => (
  {type: GET_MAIN_DATA});

export const setMainData = (mainData: Response[]): Actions => (
  {type: SET_MAIN_DATA, value: mainData});