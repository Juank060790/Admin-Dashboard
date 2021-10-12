import * as types from "../constants/products.constants";

const initialState = {
  products: [],
  isLoading: false,
  messageSuccess: "",
  messageError: "",
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.STORE_PRODUCTS_REQUEST:
    case types.SAVE_ITEM_DATA_BASE_REQUEST:
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
    case types.SAVE_ITEM_DATA_BASE_SUCCESS:
      return {
        ...state,
        messageSuccess: action.payload,
        isLoading: false,
      };
    case types.STORE_PRODUCTS_FAILURE:
    case types.SAVE_ITEM_DATA_BASE_FAILURE:
      return {
        ...state,
        isLoading: false,
        messageError: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
