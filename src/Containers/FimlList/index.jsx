import React, { useEffect } from 'react';
import Slider from "react-slick";
import "./style.scss";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import FilmItem from '../FilmItem';
import { connect } from "react-redux";
import { getFilmList } from "../../Actions/film";
// import { getFilmPagination } from "../../Actions/film";
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

const FimlList = (props) => {
    useEffect(() => {
        props.getFilmList();
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: false,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        draggable: true,
        rows: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    const renderFilmList = () => {
        let filmListPagination = _.chunk(props.filmList, 8);
        // return <React.Fragment>
        //     {filmListPagination.map((wrap) => {
        //         return wrap.map((film, index) => {
        //             return <div key={index} className="col-md-3 col-sm-6 col-xs-12 w-25 d-inline-block film-item_container">
        //                 <FilmItem film={film} />
        //             </div>
        //         })
        //     })}
        // </React.Fragment>
        return filmListPagination.map((wrap, index) => {
            return <div key={index}>
                {wrap.map((film, index) => {
                    return <div key={index} className="col-md-3 col-sm-6 col-xs-12 w-25 d-inline-block film-item_container">
                        <FilmItem film={film} />
                    </div>
                })}
            </div>
        })
    }

    return (
        <div className="mt-5">
            <ul className="nav nav-pills mb-3 container text-center justify-content-center mb-5" id="pills-tab" role="tablist">
                <li className="nav-item nowShowingFilms_container">
                    <a className="nowShowingFilms nav-link active" id="pills-nowShowingFilms-tab" data-toggle="pill" href="#pills-nowShowingFilms" role="tab" aria-controls="pills-nowShowingFilms" aria-selected="true">Đang Chiếu</a>
                </li>
                <li className="nav-item upComingFilms_container">
                    <a className="upComingFilms nav-link" id="pills-upComingFilms-tab" data-toggle="pill" href="#pills-upComingFilms" role="tab" aria-controls="pills-upComingFilms" aria-selected="false">Sắp Chiếu</a>
                </li>
            </ul>

            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-nowShowingFilms" role="tabpanel" aria-labelledby="pills-nowShowingFilms-tab">
                    <Slider {...settings} className="film-list container">
                        {/* {props.filmList.map((film) => {
                            return (
                                <React.Fragment key={film.maPhim}>
                                    <div className="col-md-3 col-sm-6 col-xs-12 w-25 d-inline-block film-item_container">
                                        <FilmItem film={film} key={film.maPhim} />
                                    </div>
                                    <div className="col-md-3 col-sm-6 col-xs-12 w-25 d-inline-block film-item_container">
                                        <FilmItem film={film} key={film.maPhim} />
                                    </div>
                                    <div className="col-md-3 col-sm-6 col-xs-12 w-25 d-inline-block film-item_container">
                                        <FilmItem film={film} key={film.maPhim} />
                                    </div>
                                    <div className="col-md-3 col-sm-6 col-xs-12 w-25 d-inline-block film-item_container">
                                        <FilmItem film={film} key={film.maPhim} />
                                    </div>
                                </React.Fragment>
                            )
                        })} */}
                        {
                            renderFilmList()
                        }
                    </Slider>
                </div>
                <div className="tab-pane fade" id="pills-upComingFilms" role="tabpanel" aria-labelledby="pills-upComingFilms-tab">
                    <Slider {...settings} className="film-list container">
                        {props.filmList.map((film) => {
                            return (
                                <React.Fragment key={film.maPhim}>
                                    <div className="col-md-3 col-sm-6 col-xs-12 w-25 d-inline-block film-item_container">
                                        <FilmItem film={film} key={film.maPhim} />
                                    </div>
                                    <div className="col-md-3 col-sm-6 col-xs-12 w-25 d-inline-block film-item_container">
                                        <FilmItem film={film} key={film.maPhim} />
                                    </div>
                                    <div className="col-md-3 col-sm-6 col-xs-12 w-25 d-inline-block film-item_container">
                                        <FilmItem film={film} key={film.maPhim} />
                                    </div>
                                    <div className="col-md-3 col-sm-6 col-xs-12 w-25 d-inline-block film-item_container">
                                        <FilmItem film={film} key={film.maPhim} />
                                    </div>
                                </React.Fragment>
                            )
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        filmList: state.moviesList,
    }
}

export default connect(mapStateToProps, { getFilmList })(FimlList);
