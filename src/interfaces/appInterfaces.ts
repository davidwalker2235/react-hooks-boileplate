import React, { ReactNode } from 'react';
import { RouterState } from 'connected-react-router'

// Subscriber
export interface SubscriberProps {
  children?: React.ReactElement<any> | null;
  subscribe: () => void;
  unsubscribe: () => void;
}

// Login
export interface LoginState {
  user?: string;
  password?: string;
  isLogged?: boolean;
  hasuserLabelError?: boolean,
  haspasswordLabelError?: boolean,
  showPassword?: boolean;
}

export interface LoginProps {
  history?: any;
  isLogged?: boolean;
  children?: React.ReactElement<any> | null;
  login?: (values: LoginState) => void
}

// Main
export interface MainProps {
  mainData: Response[];
  isLogged?: boolean;
  history?: any;
}

// Commons
export interface RequestInfo {
  type: string;
  url: string;
  body?: object;
  options?: object
}
export interface Response {
  id: number;
  name: string;
  thumbnail: string;
  age: number;
  weight: number;
  height: number;
  hair_color: string;
  professions: Array<string>;
  friends: Array<string>;
}

export interface MainData {
  Brastlewark: Response[]
}

// State
export interface State {
  login: LoginProps;
  loading: LoadingState;
  modal: ModalState;
  main: MainProps;
  router: RouterState;
}

// Actions
export interface Actions {type: string, value?: any}

// Loading screen
export interface LoadingState {
  isLoading: boolean
}

// Modal screen
export interface ModalState {
  isOpen: boolean;
  children: ReactNode;
}