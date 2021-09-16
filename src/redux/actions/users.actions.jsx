import * as types from "../constants/users.constants";

const storeUsers = (users) => (dispatch) => {
  console.log("usersDispatch :>> ", users);
  dispatch({
    type: types.STORE_USERS_REQUEST,
    payload: null,
  });
  if (users) {
    dispatch({
      type: types.STORE_USERS_SUCCESS,
      payload: users,
    });
  } else {
    dispatch({
      type: types.STORE_USERS_FAILURE,
      payload: null,
    });
  }
};

export const usersActions = {
  storeUsers,
};
