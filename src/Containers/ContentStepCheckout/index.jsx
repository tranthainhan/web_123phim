import React from "react";
import "./style.scss";
import { connect } from "react-redux";
import ContentStepOneCheckout from "../ContentStepOneCheckout";
import ContentStepTwoCheckout from "../ContentStepTwoCheckout";
import ContentStepThreeCheckout from "../../Components/ContentStepThreeCheckout";

const ContentStepCheckout = ({ ticket, activeStep }) => {
  const getContentStep = activeStep => {
    switch (activeStep) {
      case 0: {
        return <ContentStepOneCheckout film={ticket.thongTinPhim} />;
      }
      case 1:
        return <ContentStepTwoCheckout ticket={ticket} />;
      case 2:
        return <ContentStepThreeCheckout />;
      default:
        return null;
    }
  };
  return <div className="step">{getContentStep(activeStep)}</div>;
};
const mapStateToProps = state => {
  return {
    activeStep: state.stepper
  };
};

export default connect(mapStateToProps, null)(ContentStepCheckout);
