import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { http } from '../../services/http';
import { QueryParams, FavoriteCompaniesResponse } from './types';

export const fetchFavoritesList = createAsyncThunk(
  'favoriteCompanies/favoritesList',
  async (query: QueryParams) => {
    const url = `/companies/favorites?page=${query.page}&limit=${query.limit}`;
    const { data }: AxiosResponse<FavoriteCompaniesResponse> = await http.get(
      url
    );

    return data;
  }
);
export const likeCompany = createAsyncThunk(
  'favoriteCompanies/like',
  async (id: string) => {
    const url = `/companies/${id}/like`;
    const data: AxiosResponse<boolean> = await http.get(url);

    return data;
  }
);

export const dislikeCompany = createAsyncThunk(
  'favoriteCompanies/dislike',
  async (id: string) => {
    const url = `/companies/${id}/dislike`;
    const data: AxiosResponse<boolean> = await http.get(url);

    return data;
  }
);
