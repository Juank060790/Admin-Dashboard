import * as types from "../constants/products.constants";

const initialState = {
  products: [],
  isLoading: false,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.STORE_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.STORE_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        isLoading: false,
      };
    case types.STORE_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default productsReducer;
