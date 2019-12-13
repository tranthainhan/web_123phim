import React from "react";
import logo from "../../Assets/img/logo.png";
import { Link } from "react-router-dom";
import "./style.scss";

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img src={logo} alt="Hình logo" />
      </Link>
    </div>
  );
};

export default Logo;
