import * as types from "../Constants/Films";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_FILMS: {
      return action.payload;
    }
    default:
      return state;
  }
};
export default reducer;
