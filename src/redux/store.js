import { configureStore } from '@reduxjs/toolkit';
import { todoRedusers } from './slice';

export const store = configureStore({
  reducer: {
    todos: todoRedusers,
  },
});
