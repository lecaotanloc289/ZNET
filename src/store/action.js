export const isLogin = (data) => {
  return {
    type: "LOGIN",
    payload: data,
  };
};
