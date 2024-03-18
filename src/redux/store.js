import {
  applyMiddleware,
  combineReducers,
  createStore,
} from "@reduxjs/toolkit";
import loginReducer from "../store/UserSlice";
import { dataReducer } from "./reducers";
import { thunk } from "redux-thunk";

// Middleware để lưu trạng thái vào localStorage
const saveToLocalStorage = (store) => (next) => (action) => {
  const result = next(action);
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
  return result;
};

// Middleware để tải trạng thái từ localStorage khi khởi đầu
const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Error loading state from localStorage:", err);
    return undefined;
  }
};

// Khởi tạo store với trạng thái từ localStorage
const initialState = loadFromLocalStorage();

const rootReducer = combineReducers({
  user: loginReducer,
  data: dataReducer,
});

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk, saveToLocalStorage)
);
export default store;
