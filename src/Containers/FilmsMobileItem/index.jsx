import React from "react";
import "./style.scss";
import dataImg from "../../dataImg";
import Rating from "@material-ui/lab/Rating";
import { Link } from "react-router-dom";

const FilmMobile = ({ film }) => {
  return (
    <Link to={`/phim/${film.maPhim}-${film.biDanh}`}>
      <div className="film">
        <img
          src={dataImg[film.biDanh]}
          alt="..."
          onError={e => {
            if (e.target.src !== dataImg[film.biDanh]) {
              e.target.src = dataImg[film.biDanh];
            }
          }}
        />
        <div className="point">
          <span>9.5</span>
          <Rating readOnly value={9.5 / 2} precision={0.5} className="start" />
        </div>
      </div>
    </Link>
  );
};

export default FilmMobile;
