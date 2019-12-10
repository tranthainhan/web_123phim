import * as types from "../Constants/User";

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_WITH_FB: {
      localStorage.setItem("user", JSON.stringify(action.user));
      return action.user;
    }
    case types.LOGIN_WITH_GG: {
      localStorage.setItem("user", JSON.stringify(action.user));
      return action.user;
    }
    case types.LOGIN: {
      localStorage.setItem("user", JSON.stringify(action.user));
      return action.user;
    }
    case types.LOGOUT: {
      localStorage.removeItem("user");
      return {};
    }
    default:
      return state;
  }
};
export default reducer;
