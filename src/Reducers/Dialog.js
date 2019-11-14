import * as types from "../Constants/Dialog";

const initialState = false;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TOOGLE: {
        return !state;
    }
    default:
      return state;
  }
};

export default reducer;
