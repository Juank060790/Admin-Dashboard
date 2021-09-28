import * as types from "../constants/products.constants";

const storeProducts = (products) => (dispatch) => {
  dispatch({
    type: types.STORE_PRODUCTS_REQUEST,
    payload: null,
  });
  if (products) {
    dispatch({
      type: types.STORE_PRODUCTS_SUCCESS,
      payload: products,
    });
  } else {
    dispatch({
      type: types.STORE_PRODUCTS_FAILURE,
      payload: null,
    });
  }
};

export const productActions = {
  storeProducts,
};
