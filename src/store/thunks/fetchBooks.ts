import { IBooksResponse } from 'src/types/books.types';
import { $api } from 'src/http/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getBooks = createAsyncThunk(
    'books/getBooks',
    async (q: string, thunkAPI) => {
      try {
        const response = await $api.get<IBooksResponse>(`https://www.googleapis.com/books/v1/volumes?q=${q}`)
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue("Не удалось найти")
      }
    }
  )