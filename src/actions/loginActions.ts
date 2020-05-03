import {Actions, LoginState} from "../interfaces/appInterfaces";
import {LOGIN, LOGOUT} from "../constants/constants";

export const login = (value: LoginState): Actions => (
  {type: LOGIN, value});

export const logout = (): Actions => (
  {type: LOGOUT});