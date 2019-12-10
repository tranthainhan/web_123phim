import React, { useState, memo, useEffect, useRef } from "react";
import "./style.scss";
import _ from "lodash";
import { connect } from "react-redux";
import { toggle } from "../../Actions/Dialog";
import { withRouter } from "react-router-dom";
import apiCinema from "../../Api/cinema";
import IconDropDown from "@material-ui/icons/KeyboardArrowDown";
import Button from "@material-ui/core/Button";
import classNames from "classnames";

const HomeTools = ({ history, user, toggle, films }) => {
  const [film, setFilm] = useState({
    filmList: [],
    choseFilm: {}
  });
  const [cinema, setCinema] = useState({
    cinemaList: [],
    choseCinema: {}
  });

  const [date, setDates] = useState({ list: {}, choseDate: "" });

  const [showings, setShowings] = useState({
    list: {},
    choseShowings: {}
  });

  const [open, setOpen] = useState({
    film: false,
    cinema: false,
    date: false,
    showings: false
  });
  const refs = useRef();

  useEffect(() => {
    !_.isEmpty(films) && setFilm({ ...film, filmList: [...films] });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [films]);

  const getCinemaList = maPhim => {
    apiCinema.get(`LayThongTinLichChieuPhim?MaPhim=${maPhim}`).then(result => {
      setCinema({
        ...cinema,
        cinemaList: result.data.heThongRapChieu.map(item => ({
          maRap: item.maHeThongRap,
          tenRap: item.tenHeThongRap
        }))
      });
      setDates(() => {
        const list = Object.assign(
          {},
          ...result.data.heThongRapChieu.map(item => {
            const key = item.maHeThongRap;
            let value = item.cumRapChieu[0].lichChieuPhim.map(item => {
              const date = new Date(item.ngayChieuGioChieu);
              return date.toLocaleDateString();
            });
            const uniqueSet = new Set(value);
            value = [...uniqueSet];
            return { [key]: value };
          })
        );
        return { ...date, list };
      });
      setShowings(() => {
        const list = Object.assign(
          {},
          ...result.data.heThongRapChieu.map(item => {
            const key = item.maHeThongRap;
            const value = item.cumRapChieu[0].lichChieuPhim.reduce(
              (object, item) => {
                const date = new Date(item.ngayChieuGioChieu);
                const key = date.toLocaleDateString();
                object[key] = object[key] || [];
                const value = {
                  time: `${date.getHours()}:${date.getMinutes()}`,
                  code: item.maLichChieu
                };
                object[key].push(value);
                return object;
              },
              {}
            );
            return { [key]: value };
          })
        );
        return { ...showings, list };
      });
    });
  };

  const toggleOpen = nameState => {
    setOpen(() => {
      let newOpen = { ...open };
      const array = Object.entries(newOpen);
      array.map(item =>
        item[0] === nameState ? (item[1] = !open[nameState]) : (item[1] = false)
      );
      newOpen = Object.assign(
        {},
        ...array.map(item => ({ [item[0]]: item[1] }))
      );
      return newOpen;
    });
  };
  const dropdownClose = nameState => {
    setOpen({ ...open, [nameState]: false });
  };

  const scrollDown = () => {
    refs.current.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  };
  return (
    <div
      className="home-tools"
      ref={div => (refs.current = div)}
      onClick={scrollDown}
    >
      <div className="select film">
        <div className="dropdown-toggle" onClick={() => toggleOpen("film")}>
          <p>{_.isEmpty(film.choseFilm) ? "Phim" : film.choseFilm.tenPhim}</p>
          <IconDropDown className="icon-dropdown" />
        </div>
        <ul
          className={classNames("select-film-dropdown", {
            open: open.film
          })}
        >
          {film.filmList.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  setFilm({
                    ...film,
                    openSelectFilm: !film.openSelectFilm,
                    choseFilm: {
                      maPhim: item.maPhim,
                      tenPhim: item.tenPhim
                    }
                  });
                  getCinemaList(item.maPhim);
                  dropdownClose("film");
                }}
              >
                {item.tenPhim}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="select cinema">
        <div className="dropdown-toggle" onClick={() => toggleOpen("cinema")}>
          <p>
            {_.isEmpty(cinema.choseCinema) ? "Rạp" : cinema.choseCinema.tenRap}
          </p>
          <IconDropDown className="icon-dropdown" />
        </div>
        <ul
          className={classNames("select-cinema-dropdown", {
            open: open.cinema
          })}
        >
          {_.isEmpty(film.choseFilm) ? (
            <li>Vui lòng chọn phim</li>
          ) : (
            cinema.cinemaList.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  setCinema({
                    ...cinema,
                    choseCinema: {
                      maRap: item.maRap,
                      tenRap: item.tenRap
                    },
                    openSelectCinema: !cinema.openSelectCinema
                  });
                  dropdownClose("cinema");
                }}
              >
                {item.tenRap}
              </li>
            ))
          )}
        </ul>
      </div>
      <div className="select dayView">
        <div className="dropdown-toggle" onClick={() => toggleOpen("date")}>
          <p>{_.isEmpty(date.choseDate) ? "Ngày xem" : date.choseDate}</p>
          <IconDropDown className="icon-dropdown" />
        </div>
        <ul className={classNames("select-dropdown-date", { open: open.date })}>
          {(_.isEmpty(film.choseFilm) && _.isEmpty(cinema.choseCinema) && (
            <li>Vui lòng chọn phim và rạp</li>
          )) ||
            (_.isEmpty(cinema.choseCinema) && <li>Vui lòng chọn rạp</li>) ||
            date.list[cinema.choseCinema.maRap].map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  setDates({ ...date, choseDate: item });
                  dropdownClose("date");
                }}
              >
                {item}
              </li>
            ))}
        </ul>
      </div>
      <div className="select showings">
        <div className="dropdown-toggle" onClick={() => toggleOpen("showings")}>
          <p>
            {_.isEmpty(showings.choseShowings)
              ? "Suất chiếu"
              : showings.choseShowings.time}
          </p>
          <IconDropDown className="icon-dropdown" />
        </div>
        <ul
          className={classNames("select-dropdown-showing", {
            open: open.showings
          })}
        >
          {(_.isEmpty(film.choseFilm) &&
            _.isEmpty(cinema.choseCinema) &&
            _.isEmpty(date.choseDate) && (
              <li>Vui lòng chọn phim, rạp và ngày xem</li>
            )) ||
            (_.isEmpty(cinema.choseCinema) && _.isEmpty(date.choseDate) && (
              <li>Vui lòng chọn rạp và ngày xem</li>
            )) ||
            (_.isEmpty(date.choseDate) && <li>Vui lòng chọn ngày xem</li>) ||
            showings.list[cinema.choseCinema.maRap][date.choseDate].map(
              (item, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setShowings({
                      ...showings,
                      choseShowings: { time: item.time, code: item.code }
                    });
                    dropdownClose("showings");
                  }}
                >
                  {item.time}
                </li>
              )
            )}
        </ul>
      </div>
      <div className="select button">
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            if (showings.choseShowings.code) {
              if (_.isEmpty(user)) {
                toggle();
              } else {
                history.push(`/checkout/${showings.choseShowings.code}`);
              }
            }
          }}
        >
          Mua vé ngay
        </Button>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    user: state.user,
    films: state.films
  };
};
const mapDispatchToProps = dispatch => {
  return {
    toggle: () => dispatch(toggle())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(withRouter(HomeTools)));
