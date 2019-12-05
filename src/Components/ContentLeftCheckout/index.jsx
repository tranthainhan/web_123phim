import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

import dataImgTicket from "../../dataImgTicket";
import ArrowBackSharpIcon from "@material-ui/icons/ArrowBackSharp";

const ContentLeftCheckout = ({ film, history, ...props }) => {
  return (
    <div className="left">
      <img src={film && dataImgTicket[film.tenPhim]} alt="..." />
      <div className="overlay"></div>
      <Link to="/">
        <ArrowBackSharpIcon className="back" />
      </Link>
      <div className="info-film">
        <p className="show-day">{film && film.ngayChieu}</p>
        <span className="film-name">{film && film.tenPhim}</span>
      </div>
    </div>
  );
};

export default ContentLeftCheckout;
