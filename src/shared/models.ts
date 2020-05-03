import { MainData, Response } from "../interfaces/appInterfaces";

export interface ResponseFromApi {
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

export const parseToResponse = (apiResponse: ResponseFromApi): Response => {
    return {
        id: (typeof apiResponse.id === 'number') ? apiResponse.id : apiResponse.id || -1,
        name: apiResponse?.name || '',
        thumbnail: apiResponse?.thumbnail || '',
        age: apiResponse?.age || -1,
        weight: apiResponse?.weight || -1,
        height: apiResponse?.height || -1,
        hair_color: apiResponse?.hair_color || '',
        professions: apiResponse?.professions || [],
        friends: apiResponse?.friends || []
    }}

export const parseFromApiToResponse = (apiResponse: MainData): Response[] => {
    const response: Response[] = apiResponse.Brastlewark || [];

    return response.map(parseToResponse);
}