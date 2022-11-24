import { combineReducers, configureStore } from '@reduxjs/toolkit';
import ProductReducer from './reducers/ProductReducer';
import CategoryReducer from './reducers/CategoryReducer';

const reducers = combineReducers({
    product: ProductReducer,
    category: CategoryReducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;