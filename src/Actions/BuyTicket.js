import * as types from "../Constants/BuyTicket";

export const sendTypeVsQuantity = infoTicket => {
  return {
    type: types.SEND_TYPE_VS_QUANTITY_TICKET,
    infoTicket
  };
};
