import React, { useState, memo } from "react";
import "./style.scss";
import imgClose from "../../Assets/img/close.png";
import Play from "@material-ui/icons/PlayArrow";
import Dialog from "@material-ui/core/Dialog";
import _ from "lodash";
import { Link } from "react-router-dom";
import dataImg from "../../dataImg";
import Skeleton from "react-loading-skeleton";

const CarouselItem = ({ item, ...props }) => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleClose = () => {
    setOpen(!open);
  };
  return (
    <React.Fragment>
      <div className="carousel-item" {...props}>
        <Link to={`/phim/${item.maPhim}-${item.biDanh}`}>
          <img
            src={dataImg[item.biDanh]}
            alt="hinh anh"
            onLoad={() => {
              let delay = _.debounce(() => {
                setIsLoading(false);
              }, 1500);
              delay();
            }}
          />
        </Link>
        {isLoading && (
          <div className="loading">
            <Skeleton height={"100%"} width={"100%"} />
          </div>
        )}

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

export default memo(CarouselItem);
