import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { Button } from "@material-ui/core";
import FB from "../../Assets/img/fb.svg";
import { connect } from "react-redux";
import { loginWithFB } from "../../Actions/User";

const ButtonLoginWithFB = props => {
  const responseFacebook = response => {
    if (!response.status) {
      const { name, id, email, picture } = response;
      const user = {
        id: id,
        name: name,
        email: email,
        picture: picture.data.url
      };
      props.getUser(user);
    }
  };
  return (
    <FacebookLogin
      appId="426821308016857"
      fields="name,email,picture"
      callback={responseFacebook}
      render={renderProps => (
        <Button
          variant="contained"
          color="primary"
          onClick={renderProps.onClick}
        >
          <img src={FB} alt="hinh fb" />
        </Button>
      )}
    />
  );
};
const mapDispatchToProps = dispatch => {
  return {
    getUser: user => {
      dispatch(loginWithFB(user));
    }
  };
};
export default connect(null, mapDispatchToProps)(ButtonLoginWithFB);
