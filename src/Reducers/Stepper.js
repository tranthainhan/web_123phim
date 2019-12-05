import * as types from "../Constants/Stepper";

const initialState = 1;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.NEXT_STEP: {
      return state + 1;
    }
    case types.PREV_STEP: {
      return state - 1;
    }
    default:
      return state;
  }
};
export default reducer;
