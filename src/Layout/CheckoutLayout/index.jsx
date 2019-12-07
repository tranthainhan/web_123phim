import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./style.scss";

import HeaderCheckout from "../../Components/HeaderCheckout";
import ContentCheckout from "../../Containers/ContentCheckout";

import { getTicket } from "../../Actions/Tichket";
// import { Button } from "@material-ui/core";

export default function CheckoutLayout(props) {
  const dispatch = useDispatch();

  const { match } = props;

  useEffect(() => {
    getTicket(match.params.maLichChieu, dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="checkout">
      <HeaderCheckout />
      <ContentCheckout />
    </div>
  );
}
