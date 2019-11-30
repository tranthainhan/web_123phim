import React, { useState } from "react";
import "./style.scss";
import dataImg from "../../dataImg";
import Play from "@material-ui/icons/PlayArrow";
import Dialog from "@material-ui/core/Dialog";

import imgClose from "../../Assets/img/close.png";

import { withRouter } from "react-router-dom";

const FilmItem = props => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(!open);
  };

  const goToBuyTicket = () => {
    props.history.push(`/phim/${props.film.maPhim}-${props.film.biDanh}`);
  };

  return (
    <div className="film-item_container">
      <div className="film-item mb-3">
        <img
          src={props.film.hinhAnh}
          alt=""
          onError={e => {
            if (e.target.src !== dataImg[`${props.film.biDanh}-doc`]) {
              e.target.src = dataImg[`${props.film.biDanh}-doc`];
            }
          }}
        />
        <div className="play-trailer">
          <div className="btn-play" onClick={handleClose}>
            <Play className="icon-play" />
          </div>
        </div>
      </div>
      <div className="film-item_detail">
        <p className="filmName text-left">{props.film.tenPhim}</p>
        <p className="filmDate text-left">{props.film.ngayKhoiChieu}</p>
        <div className="btn_Buy">
          <button className="btn w-100" onClick={goToBuyTicket}>
            MUA VÉ
          </button>
        </div>
      </div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        className="dialog-trailer"
      >
        <div className="wrap-iframe">
          <iframe
            width="100%"
            height="100%"
            title={props.film.maPhim}
            src={`${props.film.trailer}?autoplay=1`}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <img
          src={imgClose}
          alt="hinh close"
          className="close-trailer"
          onClick={handleClose}
        />
      </Dialog>
    </div>
  );
};

export default withRouter(FilmItem);
