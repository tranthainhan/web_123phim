import React, { useState, useEffect } from 'react';
import { getFilm } from "../../Actions/film";

import "./style.scss";
import NewsItem from '../NewsItem';

const NewsList = () => {
    const [filmList, setFilmList] = useState([]);

    useEffect(() => {
        getFilm()
            .then((result) => {
                setFilmList(result.data);
            })
    }, []);

    return (
        <div className="mt-5 container">
            <ul className="nav nav-pills mb-3 container text-center justify-content-center mb-5" id="pills-news-tab" role="tablist">
                <li className="nav-item nowShowingFilms_container">
                    <a className="nowShowingFilms nav-link active" id="pills-nowShowingFilms-news-tab" data-toggle="pill" href="#pills-nowShowingFilms-news" role="tab" aria-controls="pills-nowShowingFilms-news" aria-selected="true">Điện Ảnh 24h</a>
                </li>
                <li className="nav-item upComingFilms_container">
                    <a className="upComingFilms nav-link" id="pills-upComingFilms-news-tab" data-toggle="pill" href="#pills-upComingFilms-news" role="tab" aria-controls="pills-upComingFilms-news" aria-selected="false">Review</a>
                </li>
            </ul>

            <div className="tab-content" id="pills-news-tabContent">
                <div className="tab-pane fade show active" id="pills-nowShowingFilms-news" role="tabpanel" aria-labelledby="pills-nowShowingFilms-news-tab">
                    {filmList.map((film) => {
                        return (
                            <React.Fragment>
                                <div className="row">
                                    <div className="col-md-6 col-xs-12">
                                        <NewsItem film={film} />
                                    </div>

                                    <div className="col-md-6 col-xs-12">
                                        <NewsItem film={film} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 col-xs-12">
                                        <NewsItem film={film} />
                                    </div>

                                    <div className="col-md-4 col-xs-12">
                                        <NewsItem film={film} />
                                    </div>

                                    <div className="col-md-4 col-xs-12">
                                        <div className="col-xs-12">
                                            <div className="thumbnail mr-3">
                                                <a href="/"><img src={film.hinhAnh} /></a>
                                            </div>
                                            <p className="title"><a href="/">{film.moTa}</a></p>
                                        </div>
                                        <div className="col-xs-12">
                                            <div className="thumbnail mr-3">
                                                <a href="/"><img src={film.hinhAnh} /></a>
                                            </div>
                                            <p className="title"><a href="/">{film.moTa}</a></p>
                                        </div>
                                        <div className="col-xs-12">
                                            <div className="thumbnail mr-3">
                                                <a href="/"><img src={film.hinhAnh} /></a>
                                            </div>
                                            <p className="title"><a href="/">{film.moTa}</a></p>
                                        </div>
                                        <div className="col-xs-12">
                                            <div className="thumbnail mr-3">
                                                <a href="/"><img src={film.hinhAnh} /></a>
                                            </div>
                                            <p className="title"><a href="/">{film.moTa}</a></p>
                                        </div>  
                                    </div>
                                </div>
                            </React.Fragment>
                        )
                    })}
                </div>

                <div className="tab-pane fade" id="pills-upComingFilms-news" role="tabpanel" aria-labelledby="pills-upComingFilms-news-tab"></div>
            </div>
        </div>
    );
};

export default NewsList;