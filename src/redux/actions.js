import { GET_USER_INFO } from "./actionTypes";



export const getUserInfo = (user) => ({
    type: GET_USER_INFO,
    payload: user,
})
