import { applyMiddleware, combineReducers, compose, configureStore } from '@reduxjs/toolkit';
import ProductReducer from './reducers/ProductReducer';
import { legacy_createStore as createStore, AnyAction } from 'redux'
import CategoryReducer from './reducers/CategoryReducer';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';

const reducers = combineReducers({
  product: ProductReducer,
  category: CategoryReducer,
});

export const store = createStore(
  reducers, applyMiddleware(thunk))

export default reducers;
export type RootState = ReturnType<typeof reducers>;
export type Thunk = ThunkAction<void, RootState, unknown, AnyAction>

export const useAppDispatch = () => useDispatch<ThunkDispatch<RootState, unknown, AnyAction>>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;