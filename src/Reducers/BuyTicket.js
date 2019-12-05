import * as types from "../Constants/BuyTicket";

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SEND_TYPE_VS_QUANTITY_TICKET: {
      return action.infoTicket;
    }
    default:
      return state;
  }
};
export default reducer;
