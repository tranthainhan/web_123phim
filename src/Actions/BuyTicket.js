import * as types from "../Constants/BuyTicket";
// import api from "../Api/ticket";

export const sendTypeVsQuantity = infoQuantity => {
  return {
    type: types.SEND_TYPE_VS_QUANTITY_TICKET,
    infoQuantity
  };
};

export const addSeat = infoSeat => {
  return {
    type: types.ADD_SEAT,
    infoSeat
  };
};
export const removeSeat = codeChair => {
  return {
    type: types.REMOVE_SEAT,
    codeChair
  };
};
export const reset = () => {
  return {
    type: types.RESET
  };
};
// export const doneTicket = (infoTicket) => {
//   api.post('DatVe')
// }
