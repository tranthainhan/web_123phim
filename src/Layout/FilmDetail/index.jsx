import React, { useEffect, useState, useRef, useMemo } from "react";
import "./style.scss";
import _ from "lodash";
import classNames from "classnames";
import dataImg from "../../dataImg";
import playVideo from "../../Assets/img/play-video.png";
import cinemaApi from "../../Api/cinema";
import Rating from "@material-ui/lab/Rating";
import Dialog from "@material-ui/core/Dialog";
import imgClose from "../../Assets/img/close.png";
import FilmDetailTabs from "../../Containers/FilmDetailTabs";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Trailer = ({ url, open, handleClose, title }) => {
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      className="dialog-trailer"
    >
      <div className="wrap-iframe">
        <iframe
          width="100%"
          height="100%"
          title={title}
          src={`${url}?autoplay=1`}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
      <img
        src={imgClose}
        alt="hinh close"
        className="close-trailer"
        onClick={handleClose}
      />
    </Dialog>
  );
};

const FilmDetail = props => {
  let [film, setFilm] = useState({});
  const [openTrailer, setOpenTrailer] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const refsButton = useRef();

  const handleClose = () => {
    setOpenTrailer(!openTrailer);
  };

  useEffect(() => {
    let maPhim = props.match.params.bidanh.split("-")[0];
    cinemaApi
      .get(`LayThongTinLichChieuPhim?MaPhim=${maPhim}`)
      .then(result => {
        setFilm(result.data);
      })
      .then(() => {
        const delay = _.debounce(() => setIsLoading(false), 2000);
        delay();
      });
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let { hinhAnh, ngayKhoiChieu, tenPhim } = film;
  ngayKhoiChieu = new Date(ngayKhoiChieu);

  const thoiLuong = useMemo(() => {
    if (!_.isEmpty(film)) {
      let {
        thoiLuong
      } = film.heThongRapChieu[0].cumRapChieu[0].lichChieuPhim[0];
      return thoiLuong;
    }
  }, [film]);
  return (
    <div className="film-detail">
      <div className="film-detail-top">
        <div
          className={classNames("style-blur", { "height-loading": isLoading })}
        >
          <img
            src={dataImg[film.biDanh]}
            alt="..."
            // onError={e => {
            //   console.log(1);
            //   if (e.target.src !== dataImg[`${film.biDanh}`]) {
            //     e.target.src = dataImg[`${film.biDanh}`];
            //   }
            // }}
          />
          <div className="detail-film-overlay"></div>
          {isLoading && (
            <div className="loading">
              <Skeleton />
            </div>
          )}

          <div className="trailer" onClick={handleClose}>
            <img src={playVideo} alt="..." />
            <Trailer
              url={film.trailer}
              open={openTrailer}
              handleClose={handleClose}
              title={film.tenPhim}
            />
          </div>
        </div>
        <div
          className={classNames("film-detail-info", {
            "height-loading": false
          })}
        >
          <div
            className="poster"
            style={{
              backgroundImage: `url(${hinhAnh}),url(${
                dataImg[`${film.biDanh}-doc`]
              })`
            }}
          >
            {isLoading && (
              <div className="loading">
                <SkeletonTheme color="#bbb4b4">
                  <Skeleton width="100%" height="100%" />
                </SkeletonTheme>
              </div>
            )}
          </div>
          <div className="content">
            <div>
              <span className="show-day">
                {isLoading ? (
                  <SkeletonTheme color="#bbb4b4">
                    <Skeleton />
                  </SkeletonTheme>
                ) : (
                  ngayKhoiChieu.toLocaleDateString()
                )}
              </span>
            </div>
            <div>
              <span className="film-name">
                {isLoading ? (
                  <SkeletonTheme color="#bbb4b4">
                    <Skeleton width="100px" />
                  </SkeletonTheme>
                ) : (
                  tenPhim
                )}
              </span>
            </div>
            <div>
              <span className={classNames({ time: isLoading })}>
                {isLoading ? (
                  <SkeletonTheme color="#bbb4b4">
                    <Skeleton />
                  </SkeletonTheme>
                ) : (
                  `${thoiLuong} phút - 2D/Digital`
                )}
              </span>
            </div>
            {isLoading ? (
              <div className="btn-buy-ticket loading">
                <SkeletonTheme color="#bbb4b4">
                  <Skeleton width="120px" height="30px" />
                </SkeletonTheme>
              </div>
            ) : (
              <button
                className="btn-buy-ticket"
                onClick={() => {
                  refsButton.current.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                  });
                }}
              >
                Mua vé
              </button>
            )}
          </div>
          <div className="rating">
            <div className="rating-wrap">
              <div className="c100 p25 dark">
                <span>9.5</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
                {isLoading && (
                  <div className="loading">
                    <SkeletonTheme color="#bbb4b4">
                      <Skeleton circle={true} width="120px" height="120px" />
                    </SkeletonTheme>
                  </div>
                )}
              </div>
              {isLoading ? (
                <div className="loading">
                  <SkeletonTheme color="#bbb4b4">
                    <Skeleton height="24px" />
                  </SkeletonTheme>
                </div>
              ) : (
                <Rating
                  name="read-only"
                  value={2.5}
                  readOnly
                  className="start"
                />
              )}

              <div className="votes">
                {isLoading ? (
                  <SkeletonTheme color="#bbb4b4">
                    <Skeleton width="100%" />
                  </SkeletonTheme>
                ) : (
                  "0 người đánh giá"
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="film-detail-tabs" ref={div => (refsButton.current = div)}>
        <div className="wrap_tabs">
          {/* {!_.isEmpty(film) && <FilmDetailTabs film={film} />} */}
          <FilmDetailTabs film={film} />
        </div>
      </div>
    </div>
  );
};

export default FilmDetail;
