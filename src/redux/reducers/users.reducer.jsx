import * as types from "../constants/users.constants";

const initialState = {
  customers: [],
  isLoading: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.STORE_USERS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.STORE_USERS_SUCCESS:
      return {
        ...state,
        customers: action.payload,
        isLoading: false,
      };
    case types.STORE_USERS_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default usersReducer;
