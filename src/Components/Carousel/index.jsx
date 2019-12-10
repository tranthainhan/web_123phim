import React from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import "./style.scss";
import _ from "lodash";
import CarouselItem from "../Carousel-item";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import HomeTools from "../../Containers/HomeTools";
import Skeleton from "react-loading-skeleton";

const NextArrow = ({ className, style, onClick }) => {
  return (
    <ArrowForwardIosIcon
      className={className}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};
const PrevArrow = ({ className, style, onClick }) => {
  return (
    <ArrowBackIosIcon
      className={className}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};
const Carousel = ({ films }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  return (
    <div className="wrap-carousel">
      {_.isEmpty(films) ? (
        <div className="loading">
          <Skeleton height={"800px"} width={"100%"} />
        </div>
      ) : (
        <Slider {...settings} className="my-carousel">
          {films.map(item => {
            return <CarouselItem item={item} key={item.maPhim} />;
          })}
        </Slider>
      )}
      <HomeTools />
    </div>
  );
};
const mapStateToProps = state => {
  return {
    films: state.films
  };
};

export default connect(mapStateToProps, null)(Carousel);
