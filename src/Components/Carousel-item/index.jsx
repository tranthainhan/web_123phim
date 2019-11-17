import React from "react";
import "./style.scss";
import Play from "@material-ui/icons/PlayArrow";
const CarouselItem = ({ item, ...props }) => {
  return (
    <div className="carousel-item" {...props}>
      <img src={item.hinhAnh} alt="hinh anh" />
      <div className="play-trailer">
        <div className="btn-play">
          <Play className="icon-play" />
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
