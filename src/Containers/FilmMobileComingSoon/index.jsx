import React from "react";
import "./style.scss";
import dataImg from "../../dataImg";

const FilmComingSoon = ({ film }) => {
  return (
    <div className="film coming-soon">
      <img
        src={film.hinhAnh}
        alt="..."
        onError={e => {
          if (e.target.src !== dataImg[`${film.biDanh}-doc`]) {
            e.target.src = dataImg[`${film.biDanh}-doc`];
          }
        }}
      />
      <span>05/10</span>
    </div>
  );
};

export default FilmComingSoon;
