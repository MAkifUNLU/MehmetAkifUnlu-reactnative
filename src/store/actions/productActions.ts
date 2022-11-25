import axios from "axios";
import config from "../../services/config";
import { Product } from "../../types";
import { PRODUCT_FETCH, PRODUCT_ADD } from "../reducers/ProductReducer";

export const fetchProducts = () => (dispatch: (arg0: { type: string; payload: Product; }) => void) => {
  axios
    .get<Product>(config.BASE_URL + 'products', config.options)
    .then(response => {
      dispatch({ type: PRODUCT_FETCH, payload: response.data.products as Product })
    })
    .catch(e => console.log('error', e));
}

export const addProduct = () => (dispatch: (arg0: { type: string; payload: Product; }) => void) => {
    axios
      .post<Product>(config.BASE_URL + 'products', config.options)
      .then(response => {
        dispatch({ type: PRODUCT_ADD, payload: response.data.products})
      })
      .catch(e => console.log('error', e));
}