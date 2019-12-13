import React from "react";
import "./style.scss";
import userDefault from "../../Assets/img/user-default.png";
import likeImg from "../../Assets/img/like.png";

import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const RateOfFilmDetail = () => {
  return (
    <div className="rate-of-tab">
      <div className="wrap-content">
        <div className="input-review">
          <img src={userDefault} alt="..." />
          <span>Bạn nghĩ gì về phim này?</span>
          <Rating
            name="customized-empty"
            value={5}
            readOnly
            emptyIcon={<StarBorderIcon fontSize="inherit" />}
          />
        </div>
        <div className="list-comment">
          <div className="item-comment">
            <div className="main-info">
              <div className="info-reviewer">
                <img src={userDefault} alt="..." />
                <div className="info-reviewer-name">
                  <div>Trần Thái Nhân</div>
                  <p className="info-reviewer-time">20 phút trước</p>
                </div>
              </div>
              <div className="info-start">
                <p>10</p>
                <Rating readOnly value={2} />
              </div>
            </div>
            <div className="content-comment">Phim hay</div>
          </div>
          <div className="like">
            <img src={likeImg} alt="..." />
            <span className="likes">0 thích</span>
          </div>
        </div>
        <div className="list-comment">
          <div className="item-comment">
            <div className="main-info">
              <div className="info-reviewer">
                <img src={userDefault} alt="..." />
                <div className="info-reviewer-name">
                  <div>Võ Anh Dũng</div>
                  <p className="info-reviewer-time">20 phút trước</p>
                </div>
              </div>
              <div className="info-start">
                <p>10</p>
                <Rating readOnly value={2} />
              </div>
            </div>
            <div className="content-comment">Phim hay</div>
          </div>
          <div className="like">
            <img src={likeImg} alt="..." />
            <span className="likes">0 thích</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateOfFilmDetail;
