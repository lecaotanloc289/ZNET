import { GET_USER_INFO } from "./actionTypes";

const initialState = {
  user: [],
};
export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_INFO: {
      return { ...state, user: action.payload };
    }

    default:
      return state;
  }
};
