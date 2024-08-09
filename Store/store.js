import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cart.js";
import accountReducer from "./account.js";

const storeToLocalStorage = (props) => {
    return (exe) => {
      return (action) => {
        const result = exe(action); 
  
        console.log(props.getState());
  
        // result will have the next step
        localStorage.setItem("redux_store", JSON.stringify(props.getState()));
  
        return result;
      };
    };
  };

  const loadFromStorage = () => {
    if (localStorage.getItem("redux_store") !== null) {
      return JSON.parse(localStorage.getItem("redux_store"));
    }
  };

  const store = configureStore({
    reducer: {
        cart: cartReducer,
        account: accountReducer,
    },
    devTools: true,
    middleware: (defaultMiddlewareFn) => {
      return [
        ...defaultMiddlewareFn(), // spread default middlewares from the fn
        storeToLocalStorage,
      ];
    },
    preloadedState: loadFromStorage(),
  });

export default store;