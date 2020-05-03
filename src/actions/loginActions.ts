import {Actions, LoginState} from "../interfaces/appInterfaces";
import {LOGIN} from "../constants/constants";

export const login = (value: LoginState): Actions => (
  {type: LOGIN, value});