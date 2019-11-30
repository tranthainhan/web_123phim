import React, { useState } from "react";
import "./style.scss";
import imgClose from "../../Assets/img/close.png";
import Play from "@material-ui/icons/PlayArrow";
import Dialog from "@material-ui/core/Dialog";
import { Link } from "react-router-dom";
import dataImg from "../../dataImg";

const CarouselItem = ({ item, ...props }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(!open);
  };
  return (
    <React.Fragment>
      <div className="carousel-item" {...props}>
        <Link to={`/phim/${item.maPhim}-${item.biDanh}`}>
          <img src={dataImg[item.biDanh]} alt="hinh anh" />
        </Link>

        <div className="play-trailer">
          <div className="btn-play" onClick={handleClose}>
            <Play className="icon-play" />
          </div>
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
            title={item.maPhim}
            src={`${item.trailer}?autoplay=1`}
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
    </React.Fragment>
  );
};

export default CarouselItem;
