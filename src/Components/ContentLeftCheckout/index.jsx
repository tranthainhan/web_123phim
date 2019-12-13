import React, { memo, useState, useEffect } from "react";
import "./style.scss";
import { withRouter } from "react-router-dom";
import _ from "lodash";
import dataImgTicket from "../../dataImgTicket";
import ArrowBackSharpIcon from "@material-ui/icons/ArrowBackSharp";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const ContentLeftCheckout = ({ film, history }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let delay = _.debounce(() => {
      setIsLoading(false);
    }, 1000);
    delay();
  }, []);
  return (
    <div className="left">
      <img src={film && dataImgTicket[film.tenPhim]} alt="..." />
      <div className="overlay"></div>
      {isLoading && (
        <div className="loading">
          <Skeleton width="100%" height="100%" />
        </div>
      )}
      <ArrowBackSharpIcon className="back" onClick={() => history.goBack()} />
      <div className="info-film">
        <div className="show-day">
          {isLoading ? (
            <SkeletonTheme color="#bbb4b4">
              <Skeleton width="60px" height="24px" />
            </SkeletonTheme>
          ) : (
            film && film.ngayChieu
          )}
        </div>
        <span className="film-name">
          {isLoading ? (
            <SkeletonTheme color="#bbb4b4">
              <Skeleton width="100px" height="24px" />
            </SkeletonTheme>
          ) : (
            film && film.tenPhim
          )}
        </span>
      </div>
    </div>
  );
};

export default withRouter(memo(ContentLeftCheckout));
