import * as types from "../Constants/Ticket";

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_TICHKET: {
      return action.ticket;
    }
    default:
      return state;
  }
};
export default reducer;
