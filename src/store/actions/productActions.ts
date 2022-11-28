import axios from "axios";
import config from "../../services/config";
import { Product, ProductBody } from "../../types";
import { PRODUCT_FETCH, PRODUCT_ADD } from "../reducers/ProductReducer";
import { Thunk } from '../store'

export const fetchProducts = (): Thunk => (dispatch) => {
  axios
    .get<{ products: Product[] }>(config.BASE_URL + 'products', config.options)
    .then(response => {
      dispatch({ type: PRODUCT_FETCH, payload: response.data.products })
    })
    .catch(e => console.log('error', e));
}

export const addProduct = (body: ProductBody): Thunk => dispatch => {
  axios
    .post<Product>(config.BASE_URL + 'products', body, config.options)
    .then(() => {
      dispatch(fetchProducts())
    })
    .catch(e => console.log('error', e.data));
}