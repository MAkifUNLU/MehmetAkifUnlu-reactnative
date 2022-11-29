import axios from "axios";
import config from "../../services/config";
import { Category } from "../../types";
import { CATEGORY_FETCH } from "../reducers/CategoryReducer";
import { Thunk } from "../store";

export const fetchCategories = (): Thunk => (dispatch) => {
  axios
    .get<{ categories: Category[] }>(config.BASE_URL + 'categories', config.options)
    .then(response => {
      dispatch({ type: CATEGORY_FETCH, payload: response.data.categories });
    })
    .catch(e => console.log('error', e));
}
