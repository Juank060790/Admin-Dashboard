import * as types from "../constants/products.constants";
import { db } from "../../Firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import { infoAlert } from "../../components/Alerts/Alert";

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

const saveItemDataBase = (itemForm) => (dispatch) => {
  const { name, phone_number, birthdate, email, course, start_date } = itemForm;
  dispatch({
    type: types.SAVE_ITEM_DATA_BASE_REQUEST,
    payload: null,
  });
  try {
    addDoc(collection(db, "students"), {
      name: name,
      phone_number: phone_number,
      birthdate: birthdate,
      email: email,
      course: course,
      start_date: start_date,
      date_created: new Date(),
    });

    dispatch({
      type: types.SAVE_ITEM_DATA_BASE_SUCCESS,
      payload: "Item saved.",
    });
    infoAlert("Item saved.", "top-center");
  } catch (error) {
    dispatch({
      type: types.SAVE_ITEM_DATA_BASE_FAILURE,
      payload: error,
    });
  }
};

export const productActions = {
  storeProducts,
  saveItemDataBase,
};
