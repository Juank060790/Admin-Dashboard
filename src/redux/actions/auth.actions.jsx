import * as types from "../constants/auth.constants";
import {
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "../../Firebase/firebase";
// Firebase Auth

const requestLogin = () => {
  return {
    type: types.LOGIN_REQUEST,
  };
};

const receiveLogin = (user) => {
  return {
    type: types.LOGIN_SUCCESS,
    user,
  };
};

const loginError = () => {
  return {
    type: types.LOGIN_FAILURE,
  };
};

const requestLogout = () => {
  return {
    type: types.LOGOUT_REQUEST,
  };
};

const receiveLogout = () => {
  return {
    type: types.LOGOUT_SUCCESS,
  };
};

const logoutError = () => {
  return {
    type: types.LOGOUT_FAILURE,
  };
};

const verifyRequest = () => {
  return {
    type: types.VERIFY_REQUEST,
  };
};

const verifySuccess = () => {
  return {
    type: types.VERIFY_SUCCESS,
  };
};

export const loginUser = (email, password) => (dispatch) => {
  dispatch(requestLogin());
  signInWithEmailAndPassword(auth, email, password)
    .then((user) => {
      dispatch(receiveLogin(user));
    })
    .catch((error) => {
      dispatch({ type: types.LOGIN_FAILURE, payload: error });
      dispatch(loginError());
    });
};

export const logoutUser = () => (dispatch) => {
  dispatch(requestLogout());
  signOut(auth)
    .then(() => {
      dispatch(receiveLogout());
    })
    .catch((error) => {
      dispatch(logoutError());
    });
};

export const verifyAuth = () => (dispatch) => {
  dispatch(verifyRequest());
  onAuthStateChanged(auth, (user) => {
    if (user !== null) {
      dispatch(receiveLogin(user));
    }
    dispatch(verifySuccess());
  });
};
