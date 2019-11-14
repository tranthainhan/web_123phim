import React from "react";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { toggle } from "../../Actions/Dialog";

import userDefault from "../../Assets/img/user-default.png";
import "./style.scss";

const User = (props) => {
  return (
    <div className="user">
      <Button className="btn-user" onClick={()=> props.handleClose()}>
        <img src={userDefault} alt="hinh user" />
        <p>Đăng nhập</p>
      </Button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    handleClose: () => {
      dispatch(toggle());
    }
  };
};

export default connect(null, mapDispatchToProps)(User);
