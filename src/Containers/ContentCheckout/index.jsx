import React from "react";
import "./style.scss";
import classNames from "classnames";
import { connect } from "react-redux";
import ContentLeftCheckout from "../../Components/ContentLeftCheckout";
import ContentStepCheckout from "../ContentStepCheckout";
import ContentRightCheckout from "../ContentRightCheckout";

const ContentCheckout = ({ ticket, stepper }) => {
  return (
    <div className={classNames("content", { "step-1-done": stepper === 1 })}>
      <ContentLeftCheckout film={ticket.thongTinPhim} />
      <ContentStepCheckout ticket={ticket} />
      <ContentRightCheckout />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ticket: state.ticket,
    stepper: state.stepper
  };
};

export default connect(mapStateToProps, null)(ContentCheckout);
