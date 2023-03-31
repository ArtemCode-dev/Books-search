import { getBooks } from './../thunks/fetchBooks';
import { IBook, IBooksResponse } from './../../types/books.types';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IBooksState {
    books: IBook[];
    totalItems: number;
    error: null | string;
    isLoading: boolean;
}

const initialState:IBooksState = {
    books: [

    ],
    totalItems: 4,
    error: null,
    isLoading: true,
};

export const booksSlice = createSlice({
    name:'books',
    initialState,
    reducers : {

    },
    extraReducers: {
      [getBooks.fulfilled.type]: (state, action: PayloadAction<IBooksResponse>) => {
        state.isLoading = false;
        state.error = null;
        state.totalItems = action.payload.totalItems
        state.books = action.payload.items;
      },
      [getBooks.pending.type]: (state) => {
        state.isLoading = true;
      },
      [getBooks.rejected.type]: (state,  action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload
        state.books = []
      },
    }
})

export default booksSlice.reducer