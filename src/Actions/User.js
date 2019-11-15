import * as types from "../Constants/User";

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
