import axios from "axios";
import { API_URL } from "../utils/axioscustom";

export const getUserProfile = () => async (dispath) => {};

export const getUserPost = (userid) => async () => {
  try {
    const res = await axios.get(`${API_URL}images/get-by-userid/${userid}`);
    console.log(res);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log("Error get user post: ", error);
  }
};
