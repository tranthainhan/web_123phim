import React, { useState, useEffect } from 'react';
import { getFilm } from "../../Actions/film";
import _ from 'lodash';

import "./style.scss";
import NewsItem from '../NewsItem';

const NewsList = () => {
    const [filmList, setFilmList] = useState([]);
    const [show, setShow] = useState({ list: [], amount: 0 });

    useEffect(() => {
        if (_.isEmpty(filmList)) {
            getFilm()
                .then((result) => {
                    setFilmList(result.data);
                    setShow({ ...show, list: [result.data[0]] })
                })
        }
        if (!_.isEmpty(show.list)) {
            document.getElementById('pills-nowShowingFilms-news').lastElementChild.classList.add('open')
        }
    }, [filmList, show]);

    const createNews = () => {
        const index = show.amount + 1;
        setShow({ list: [...show.list, filmList[index]], amount: index });

    }

    return (
        <div className="mt-5 container news-list">
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
                    {show.list.map((film) => {
                        return (
                            <div className='wrap-item'>
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
                                        <div className="col-xs-12 mb-4">
                                            <div className="row">
                                                <div className="col-md-2 col-xs-2 thumbnail pr-0">
                                                    <a href="/"><img src={film.hinhAnh} alt="" /></a>
                                                </div>
                                                <div className="col-md-10 col-xs-10">
                                                    <p className="news_title"><a href="/">{film.moTa}</a></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 mb-4">
                                            <div className="row">
                                                <div className="col-md-2 col-xs-2 thumbnail pr-0">
                                                    <a href="/"><img src={film.hinhAnh} alt="" /></a>
                                                </div>
                                                <div className="col-md-10 col-xs-10">
                                                    <p className="news_title"><a href="/">{film.moTa}</a></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 mb-4">
                                            <div className="row">
                                                <div className="col-md-2 col-xs-2 thumbnail pr-0">
                                                    <a href="/"><img src={film.hinhAnh} alt="" /></a>
                                                </div>
                                                <div className="col-md-10 col-xs-10">
                                                    <p className="news_title"><a href="/">{film.moTa}</a></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 mb-4">
                                            <div className="row">
                                                <div className="col-md-2 col-xs-2 thumbnail pr-0">
                                                    <a href="/"><img src={film.hinhAnh} alt="" /></a>
                                                </div>
                                                <div className="col-md-10 col-xs-10">
                                                    <p className="news_title"><a href="/">{film.moTa}</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <button className='btn-create-news' onClick={createNews}> XEM THÊM</button>

                <div className="tab-pane fade" id="pills-upComingFilms-news" role="tabpanel" aria-labelledby="pills-upComingFilms-news-tab"></div>
            </div>
        </div>
    );
};

export default NewsList;