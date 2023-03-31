import { IBooksResponse } from 'src/types/books.types';
import { $api } from 'src/http/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface IGetBooksProps {
  searchVal: string;
  sortVal: string;
  categoriesVal:string;
  startIndex?: string;
}

export const getBooks = createAsyncThunk(
    'books/getBooks',
    async ({searchVal, sortVal, categoriesVal}: IGetBooksProps, thunkAPI) => {
      try {
        const response = await $api.get<IBooksResponse>(`https://www.googleapis.com/books/v1/volumes?q=${searchVal}+subject=${categoriesVal}&orderBy=${sortVal}&maxResults=30`)
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue("Не удалось найти")
      }
    }
  )

export const addBooks = createAsyncThunk(
    'books/addBooks',
    async ({searchVal, sortVal, categoriesVal, startIndex}: IGetBooksProps, thunkAPI) => {
      try {
        const response = await $api.get<IBooksResponse>(`https://www.googleapis.com/books/v1/volumes?q=${searchVal}+subject=${categoriesVal}&orderBy=${sortVal}&maxResults=30&startIndex=${startIndex}`)
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue("Не удалось найти")
      }
    }
  )