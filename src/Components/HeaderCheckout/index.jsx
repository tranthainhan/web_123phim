import React from "react";
import userDefault from "../../Assets/img/user-default.png";
import "./style.scss";
import classNames from "classnames";
import _ from "lodash";
import { connect } from "react-redux";
import { prevStep } from "../../Actions/Stepper";
import { Stepper, Step, StepLabel } from "@material-ui/core";

const steps = ["CHỌN LOẠI VÉ", "CHỌN GHẾ VÀ THANH TOÁN", "KẾT QUẢ ĐẶT VÉ"];

const HeaderCheckout = ({ activeStep, prevStep, user }) => {
  return (
    <div className={classNames("header", { "step-1-done": activeStep === 1 })}>
      <Stepper activeStep={activeStep} className="stepper">
        {steps.map((label, index) => {
          return (
            <Step
              key={label}
              onClick={() => {
                if (activeStep - index === 1) {
                  prevStep();
                }
              }}
            >
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div className="info-user">
        <img
          src={
            _.isEmpty(user)
              ? userDefault
              : user.picture
              ? user.picture
              : userDefault
          }
          alt="..."
        />
        <span className="name">{user.name || user.hoTen}</span>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    activeStep: state.stepper,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    prevStep: () => {
      dispatch(prevStep());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderCheckout);
