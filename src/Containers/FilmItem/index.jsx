import React, { useState } from 'react';
import "./style.scss";
import Play from "@material-ui/icons/PlayArrow";
import Dialog from "@material-ui/core/Dialog";

import imgClose from "../../Assets/img/close.png";

const FilmItem = (props) => {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(!open);
    }

    return (
        <div className="film-item_container">
            <div className="film-item mb-3">
                <img src={props.film.hinhAnh} alt="" />
                <div className="play-trailer">
                    <div className="btn-play" onClick={handleClose}>
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
            <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                className="dialog-trailer"
            >
                <div className='wrap-iframe' >
                    <iframe
                        width="100%"
                        height="100%"
                        title={props.film.maPhim}
                        src={`${props.film.trailer}?autoplay=1`}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                </div>
                <img src={imgClose} alt="hinh close" className='close-trailer' onClick={handleClose} />
            </Dialog>
        </div>
    );
};

export default FilmItem;