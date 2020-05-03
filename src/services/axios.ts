import axios from 'axios';
import { parseFromApiToResponse } from '../shared/models';
import { RequestInfo } from '../interfaces/appInterfaces';

export const getData = async ({type, url}: RequestInfo) => {
  try {
    // @ts-ignore
    const call = axios[type];
    const response = await call(url);
    return parseFromApiToResponse(response?.data);
  } catch (error) {
    alert(error)
  }
}