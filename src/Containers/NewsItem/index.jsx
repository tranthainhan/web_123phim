import React from 'react';

import "./style.scss";

import like from "../../Assets/img/like.png";
import comment from "../../Assets/img/comment.png";

const NewsItem = (props) => {
    return (
        <React.Fragment>
            <img className="news_img" src={props.film.hinhAnh} alt="" />
            <p className="news_title"><a href="/">{props.film.moTa}</a></p>
            <p className="news_content">{props.film.moTa}</p>
            <div className="news_vote mb-4">
                <div className="news_vote_like">
                    <img src={like} alt="" />
                    <p className="news_vote_like_quality align-items-center">0</p>
                </div>
                <div className="news_vote_comment">
                    <img src={comment} alt="" />
                    <p className="news_vote_comment_quality align-items-center">0</p>
                </div>
            </div>
        </React.Fragment>
    );
};

export default NewsItem;