import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  getAllMovieReducer,

} from "./reducer/movieReducer";

import { cartReducer } from "./reducer/cartReducer";

import {
  placeOrderReducer,

} from "./reducer/orderReducer";


import {
  registerUserReducer,
  loginUserReducer,

} from "./reducer/userReducer";

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];


const rootReducer = combineReducers({
  getAllMovieReducer: getAllMovieReducer,
  cartReducer: cartReducer,
  registerUserReducer: registerUserReducer,
  loginUserReducer: loginUserReducer,
  placeOrderReducer: placeOrderReducer,
  // getUserOrdersReducer: getUserOrdersReducer,
  // addPizzaReducer: addPizzaReducer,
  // getPizzaByIdReducer: getPizzaByIdReducer,
  // updatePizzaByIdReducer: updatePizzaByIdReducer,
  // allUserOrdersReducer: allUserOrdersReducer,
  // getAllUsersReducer: getAllUsersReducer,
});

const initialState = {
  cartReducer: {
    cartItems: cartItems,
  }
};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;