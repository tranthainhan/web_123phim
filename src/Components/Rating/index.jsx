import React from "react";
import "./style.scss";
import Rating from "@material-ui/lab/Rating";

const RatingFilm = () => {
  return (
    <div className="rating-film">
      <Rating name="customized-empty" value={2.5} precision={0.5} />
    </div>
  );
};

export default RatingFilm;
