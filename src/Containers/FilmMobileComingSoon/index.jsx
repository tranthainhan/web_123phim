import React from "react";
import "./style.scss";

const FilmComingSoon = ({ film }) => {
  return (
    <div className="film coming-soon">
      <img src={film.hinhAnh} alt="..." />
      <span>05/10</span>
    </div>
  );
};

export default FilmComingSoon;
