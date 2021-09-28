import ThemeReducer from "./ThemeReducer";
import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import usersReducer from "./users.reducer";
import productsReducer from "./products.reducer";

const rootReducer = combineReducers({
  ThemeReducer,
  auth: authReducer,
  users: usersReducer,
  products: productsReducer,
});

export default rootReducer;
