import React from "react";
import { Route, Redirect } from "react-router-dom";

const CheckoutAuth = ({ component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={routerProps => {
        if (localStorage.getItem("user")) {
          return <Component {...routerProps} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export default CheckoutAuth;
