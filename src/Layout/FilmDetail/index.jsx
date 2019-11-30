import React, { useEffect, useState } from "react";
import "./style.scss";
import dataImg from "../../dataImg";
import playVideo from "../../Assets/img/play-video.png";
import cinemaApi from "../../Api/cinema";
import Rating from "@material-ui/lab/Rating";
import Dialog from "@material-ui/core/Dialog";
import imgClose from "../../Assets/img/close.png";
import FilmDetailTabs from "../../Containers/FilmDetailTabs";

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

  const handleClose = () => {
    setOpenTrailer(!openTrailer);
  };

  useEffect(() => {
    let maPhim = props.match.params.bidanh.split("-")[0];
    cinemaApi.get(`LayThongTinLichChieuPhim?MaPhim=${maPhim}`).then(result => {
      setFilm(result.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let { hinhAnh, ngayKhoiChieu, tenPhim, lichChieu } = film;
  ngayKhoiChieu = new Date(ngayKhoiChieu);
  return (
    <div className="film-detail">
      <div className="film-detail-top">
        <div className="style-blur">
          <img
            src={dataImg[film.biDanh]}
            alt="..."
            onError={e => {
              if (e.target.src !== dataImg[`${film.biDanh}`]) {
                e.target.src = dataImg[`${film.biDanh}`];
              }
            }}
          />
          <div className="detail-film-overlay"></div>
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
        <div className="film-detail-info">
          <img
            src={hinhAnh}
            alt="... "
            onError={e => {
              if (e.target.src !== dataImg[`${film.biDanh}-doc`]) {
                e.target.src = dataImg[`${film.biDanh}-doc`];
              }
            }}
          />
          <div className="content">
            <div>
              <span>{ngayKhoiChieu.toLocaleDateString()}</span>
            </div>
            <div>
              <span className="film-name">{tenPhim}</span>
            </div>
            <div>
              <span>
                {lichChieu && lichChieu[0].thoiLuong} phút - 2D/Digital
              </span>
            </div>
            <button className="btn-buy-ticket"> Mua vé</button>
          </div>
          <div className="rating">
            <div className="rating-wrap">
              <div className="c100 p25 dark">
                <span>9.5</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <Rating name="read-only" value={2.5} readOnly className="start" />
              <div className="votes">0 người đánh giá</div>
            </div>
          </div>
        </div>
      </div>
      <div className="film-detail-tabs">
        <div className="wrap_tabs">
          <FilmDetailTabs film={film} />
        </div>
      </div>
    </div>
  );
};

export default FilmDetail;
