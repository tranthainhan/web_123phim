import React from "react";
import Rating from "../../Components/Rating";

const FilmDetail = props => {
  console.log(props);
  return (
    <div className="film-detail">
      <Rating />
    </div>
  );
};

export default FilmDetail;
