import { configureStore } from '@reduxjs/toolkit';
import { todoRedusers } from './slice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    todos: todoRedusers,
    filter: filterReducer,
  },
});
