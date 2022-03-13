import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import { baseApi } from '../services/baseApi';

import rootReducer from './rootReducer';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
  devTools: true,
});

setupListeners(store.dispatch);
export default store;

export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
