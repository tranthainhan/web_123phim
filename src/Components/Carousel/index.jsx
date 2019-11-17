import React, { useEffect, useState } from "react";
import { getFilm } from "../../Actions/film";
import Slider from "react-slick";
import "./style.scss";
import CarouselItem from "../Carousel-item";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
// import axios from "axios";

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

const Carousel = () => {
  const [filmList, setFilmList] = useState([]);
  useEffect(() => {
    getFilm().then(result => {
      setFilmList(result.data)
      // result.data.forEach((item) => {
      //   axios.get(item.hinhAnh).then(() => setFilmList([...filmList, item]))
      // })
      //  result.data.filter(item=> item.hinhAnh).map(item => {
      //   if(axios.get(item)) return item;
      // })
    });
    
  });

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: dots => (
      <div
        style={{
          backgroundColor: "#ddd",
          borderRadius: "10px",
          padding: "10px"
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <Slider {...settings} className="my-carousel">
      {filmList.map(item => (
        <CarouselItem item={item} key={item.maPhim} />
      ))}
    </Slider>
  );
};

export default Carousel;
