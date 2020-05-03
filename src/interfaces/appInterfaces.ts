import React, { ReactNode } from 'react';
import { RouterState } from 'connected-react-router'
import { ListTypeEnum, PersonEnum } from "../shared/enums";

// Subscriber
export interface SubscriberProps {
  children?: React.ReactElement<any> | null;
  subscribe: () => void;
  unsubscribe: () => void;
}

// Login
export interface LoginState {
  user: string;
  password: string;
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

// Commons
export interface Brastlewark {
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

export interface BrastlewarkProp {
  id?: number;
  name?: string;
  thumbnail?: string;
  age?: number;
  weight?: number;
  height?: number;
  hair_color?: string;
  professions?: Array<string>;
  friends?: Array<string>;
}

export interface GlobalData {
  Brastlewark: Brastlewark[]
}

export interface ListData {
  id?: number;
  name?: string;
  thumbnail?: string;
}

export interface ListInfoData {
  listType?: ListTypeEnum;
  listData?: ListData[];
}

// State
export interface State {
  login: LoginProps;
  loading: LoadingState;
  modal: ModalState;
  home: HomeProps;
  list: ListProps;
  person: PersonProps;
  filter: FilterState;
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

// Home
export interface HomeProps {
  globalData: Brastlewark[];
}

// Cover
export interface CoverProps {
  history: any;
}

// List
export interface ListProps {
  route?: any;
  personListData: Brastlewark[];
  friendsListData: FriendsData[];
  listType?: ListTypeEnum;
  listData?: ListData[];
  onClickRow?: (name?: string, id?: number) => void;
}

export interface ListRows {
  data: Brastlewark;
  panelId: number;
  panelExpanded: string | boolean; 
  handleChange: (personId: number, panelId: string | boolean) => void;
  onClickFriend: (personId: number | undefined) => void;
}

export interface FriendsData {
  id: number;
  thumbnail: string;
}

// Person
export interface PersonProps {
  personData: BrastlewarkProp;
  friendData: BrastlewarkProp;
}

export interface PersonInfoProps {
  onClickFriend?: (personId: number | undefined) => void;
}

// Filter
export interface filterMaxMinValues {
  ageMaxValue: number;
  ageMinValue: number;
  weightMaxValue: number;
  weightMinValue: number;
  heightMaxValue: number;
  heightMinValue: number;
  [key: string]: number;
}
export interface FilterData {
  professions: string[];
  hair_color: string[];
  ranges: filterMaxMinValues;
  [key: string]: any;
}

export interface MultiSelectValues {
  [PersonEnum.HAIR_COLOR]: string[],
  [PersonEnum.PROFESSION]: string[],
  [key: string]: string[];
}

export interface FilterState {
  personName: string;
  filterData?: FilterData | undefined;
  slidersData: FilterRanges;
  multiSelectValue: MultiSelectValues;
  isFiltered?: boolean
}

export interface FilterRanges {
  [PersonEnum.AGE]: number[],
  [PersonEnum.WEIGHT]: number[],
  [PersonEnum.HEIGHT]: number[],
  [key: string]: number[];
}

export interface SelectedFilterData {
  [PersonEnum.NAME]: string;
  [PersonEnum.HAIR_COLOR]: string[];
  [PersonEnum.PROFESSION]: string[];
  ranges: FilterRanges;
}