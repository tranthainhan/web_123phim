import * as types from "../Constants/BuyTicket";

const initialState = { quantity: { ticket: 0, ticketVip: 0 }, infoSeat: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SEND_TYPE_VS_QUANTITY_TICKET: {
      let newState = { ...state, ...action.infoQuantity };
      return newState;
    }
    case types.ADD_SEAT: {
      let newInfoSeat = [...state.infoSeat, action.infoSeat];
      let SeatBasic = newInfoSeat.filter(item => item.typeChair === "Thuong");
      let SeatVip = newInfoSeat.filter(item => item.typeChair === "Vip");
      if (SeatBasic.length > state.quantity.ticket) {
        let indexRemove = newInfoSeat.findIndex(
          item => item.typeChair === "Thuong"
        );
        newInfoSeat = newInfoSeat.filter(
          (item, index) => index !== indexRemove
        );
      } else if (SeatVip.length > state.quantity.ticketVip) {
        let indexRemove = newInfoSeat.findIndex(
          item => item.typeChair === "Vip"
        );
        newInfoSeat = newInfoSeat.filter(
          (item, index) => index !== indexRemove
        );
      }
      let newState = { ...state, infoSeat: newInfoSeat };
      return newState;
    }
    case types.REMOVE_SEAT: {
      let newState = { ...state };
      newState.infoSeat = newState.infoSeat.filter(
        item => item.codeChair !== action.codeChair
      );
      return newState;
    }
    case types.RESET: {
      return initialState;
    }
    default:
      return state;
  }
};
export default reducer;
