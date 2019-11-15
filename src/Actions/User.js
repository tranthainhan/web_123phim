import * as types from "../Constants/User";
import api from "../Api/user";

export const login = user => {
  return {
    type: types.LOGIN,
    user
  };
};
export const logout = () => {
  return {
    type: types.LOGOUT
  };
};
export const loginWithFB = user => {
  return {
    type: types.LOGIN_WITH_FB,
    user
  };
};

export const loginWithGG = user => {
  return {
    type: types.LOGIN_WITH_GG,
    user
  };
};
export const register = user => {
  return api.post("DangKy", user);
};
