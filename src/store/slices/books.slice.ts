import { getBooks, addBooks } from './../thunks/fetchBooks';
import { IBook, IBooksResponse, IRequest } from './../../types/books.types';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IBooksState {
    books: IBook[];
    totalItems: number;
    error: null | string;
    isLoading: boolean;
    request: IRequest;
}

const initialState:IBooksState = {
    books: [],
    totalItems: 0,
    error: null,
    isLoading: true,
    request: {
      searchVal: '',
      sortVal: '',
      categoriesVal: '',
    }
};

export const booksSlice = createSlice({
    name:'books',
    initialState,
    reducers : {
      changeRequest(state, action: PayloadAction<IRequest>) {
        state.request = action.payload;
      }
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
      [addBooks.fulfilled.type]: (state, action: PayloadAction<IBooksResponse>) => {
        state.isLoading = false;
        state.error = null;
        state.totalItems = action.payload.totalItems
        action.payload.items.forEach((item) => state.books.push(item));
      },
      [addBooks.pending.type]: (state) => {
        state.isLoading = true;
      },
      [addBooks.rejected.type]: (state,  action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload
        state.books = []
      },
    }
})

export const { changeRequest } = booksSlice.actions;
export default booksSlice.reducer;