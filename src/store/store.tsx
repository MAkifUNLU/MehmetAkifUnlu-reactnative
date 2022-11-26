import { applyMiddleware, combineReducers, compose, configureStore } from '@reduxjs/toolkit';
import ProductReducer from './reducers/ProductReducer';
import { legacy_createStore as createStore} from 'redux'
import CategoryReducer from './reducers/CategoryReducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    product: ProductReducer,
    category: CategoryReducer,
});

export const store = createStore(
  reducers, applyMiddleware(thunk))

// export const store = createStore(reducers, {}, compose(applyMiddleware(thunk)));

// export const store = configureStore({
//   reducer: reducers,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
//     serializableCheck: false,
//   }),
// });

export default reducers;
export type RootState = ReturnType<typeof reducers>;