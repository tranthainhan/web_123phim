import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./style.scss";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import FilmItem from "../FilmItem";
import { connect } from "react-redux";
import _ from "lodash";

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

const FimlList = props => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!_.isEmpty(props.filmList)) {
      let delay = _.debounce(() => setIsLoading(false), 1000);
      delay();
    }
  }, [props.filmList]);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    draggable: true,
    rows: 2,
    slidesPerRow: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  const renderFilmList = () => {
    return props.filmList.map((film, index) => {
      return (
        <div
          key={index}
          className="col-md-3 col-sm-6 col-xs-12 w-25 d-inline-block film-item_container"
        >
          <FilmItem film={film} />
        </div>
      );
    });
  };

  return (
    <div className="mt-5 film-list">
      <ul className="nav nav-pills mb-3 container  text-center justify-content-center mb-5">
        <li className="nav-item nowShowingFilms_container">
          <a
            className="nowShowingFilms nav-link active"
            data-toggle="pill"
            href="#pills-nowShowingFilms"
          >
            Đang Chiếu
          </a>
        </li>
        <li className="nav-item upComingFilms_container">
          <a
            className="upComingFilms nav-link"
            data-toggle="pill"
            href="#pills-upComingFilms"
          >
            Sắp Chiếu
          </a>
        </li>
      </ul>

      <div className="tab-content container">
        <div className="tab-pane fade show active" id="pills-nowShowingFilms">
          <Slider {...settings} className="film-list container">
            {isLoading
              ? Array.from({ length: 8 }).map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="col-md-3 col-sm-6 col-xs-12 w-25 d-inline-block film-item_container"
                    >
                      <FilmItem film={null} />
                    </div>
                  );
                })
              : renderFilmList()}
            {}
          </Slider>
        </div>
        <div className="tab-pane fade" id="pills-upComingFilms" role="tabpanel">
          <Slider {...settings} className="film-list ">
            {renderFilmList()}
          </Slider>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    filmList: state.films
  };
};

export default connect(mapStateToProps, null)(FimlList);
