import * as types from "../Constants/User";

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_WITH_FB: {
      return action.user;
    }
    case types.LOGIN_WITH_GG: {
      return action.user;
    }
    case types.LOGIN: {
      return action.user;
    }
    case types.LOGOUT:{
      return {}
    }
    default:
      return state;
  }
};
export default reducer;
