import { combineReducers } from '@reduxjs/toolkit';

import { baseApi } from '../services/baseApi';

// Used to combine all reducers
const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
