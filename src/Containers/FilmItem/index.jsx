import React from 'react';
import "./style.scss";
import Play from "@material-ui/icons/PlayArrow";

const FilmItem = (props) => {
    return (
        <div className="film-item_container">
            <div className="film-item mb-3">
                <img src={props.film.hinhAnh} alt="" />
                <div className="play-trailer">
                    <div className="btn-play">
                        <Play className="icon-play" />
                    </div>
                </div>
            </div>
            <div className="film-item_detail">
                <p className="filmName text-left">{props.film.tenPhim}</p>
                <p className="filmDate text-left">{props.film.ngayKhoiChieu}</p>
                <div className="btn_Buy">
                    <button className="btn w-100">MUA VÉ</button>
                </div>
            </div>
        </div>
    );
};

export default FilmItem;