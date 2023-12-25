import {Action, combineReducers, configureStore, ThunkAction} from '@reduxjs/toolkit';
import {SWSApi} from '../api/SWSApi';

const rootReducer = combineReducers({
  [SWSApi.reducerPath]: SWSApi.reducer,
});
export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({}).concat(SWSApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
