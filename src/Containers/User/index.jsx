import React from "react";
import { Button, Menu, MenuItem } from "@material-ui/core";
import { connect } from "react-redux";
import { toggle } from "../../Actions/Dialog";
import { logout } from "../../Actions/User";
import _ from "lodash";

import userDefault from "../../Assets/img/user-default.png";
import "./style.scss";

const User = props => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const { user, logout } = props;
  return (
    <div className="user">
      <Button
        className="btn-user"
        onClick={event => {
          _.isEmpty(user) ? props.toggleModal() : handleClick(event);
        }}
      >
        <img
          src={_.isEmpty(user) ? userDefault : user.picture}
          alt="hinh user"
        />
        <p> {_.isEmpty(user) ? "Đăng nhập" : user.name}</p>
      </Button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className="dropdown-user"
      >
        <MenuItem onClick={handleClose}>Thông tin cá nhân</MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            logout();
          }}
        >
          Đăng xuất
        </MenuItem>
      </Menu>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleModal: () => {
      dispatch(toggle());
    },
    logout: () => {
      dispatch(logout());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
