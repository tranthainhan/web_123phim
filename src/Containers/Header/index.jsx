import React from "react";

import Logo from "../../Components/LogoHeader";
import AnchorLink from "../../Components/AnchorLink";
import User from "../User";

import "./style.scss";
import MenuMobile from "../MenuMobile";

const Header = props => {
  return (
    <div className="header">
      <Logo />
      <AnchorLink history={props.history} />
      <User />
      <MenuMobile />
    </div>
  );
};

export default Header;
