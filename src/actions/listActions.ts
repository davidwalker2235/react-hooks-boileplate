import {GET_PERSON_LIST_DATA, SET_PERSON_LIST_DATA, GET_FRIENDS_LIST_DATA, SET_FRIENDS_LIST_DATA} from '../constants/constants';
import { Actions, ListInfoData, FriendsData } from '../interfaces/appInterfaces';
import { Brastlewark } from '../interfaces/appInterfaces';

export const getPersonListData = (personListData: Brastlewark[]): Actions => (
  {type: GET_PERSON_LIST_DATA, value: personListData});

export const setPersonListData = (personListData: ListInfoData): Actions => (
  {type: SET_PERSON_LIST_DATA, value: personListData});

export const getFriendsListData = (friendsList: string[], globalData: Brastlewark[]): Actions => (
  {type: GET_FRIENDS_LIST_DATA, value: {friendsList, globalData}});

export const setFriendsListData = (friendListData: FriendsData[]): Actions => (
  {type: SET_FRIENDS_LIST_DATA, value: friendListData});