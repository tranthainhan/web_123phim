import React, { useState, useEffect, memo } from "react";
import "./style.scss";
import { getFilm } from "../../Actions/film";
import _ from "lodash";
import IconDropDown from "@material-ui/icons/KeyboardArrowDown";
import Button from '@material-ui/core/Button';
import classNames from 'classnames';    

const HomeTools = () => {
  const [choseFilm, setChoseFilm] = useState({});
  const [listFilm, setListFilm] = useState([]);
  useEffect(() => {
    getFilm().then(res => {
      setListFilm(
        res.data.map(item => ({ maPhim: item.maPhim, tenPhim: item.tenPhim }))
      );
    });
  }, []);
  return (
    <div className="home-tools">
      <div className="select film">
        <div className="dropdown-toggle">
          <p>{_.isEmpty(choseFilm) ? "Phim" : choseFilm.tenPhim}</p>
          <IconDropDown className='icon-dropdown'/>
        </div>
        <ul className="select-film-dropdown">
          {listFilm.map((item, index) => (
            <li
            key={index}
              onClick={() =>
                setChoseFilm({ maPhim: item.maPhim, tenPhim: item.tenPhim })
              }
            >
              {item.tenPhim}
            </li>
          ))}
        </ul>
      </div>
      <div className="select">
        <div className="dropdown-toggle">
          <p>{_.isEmpty(choseFilm) ? "Rạp" : choseFilm.tenPhim}</p>
          <IconDropDown className='icon-dropdown'/>
        </div>
        <ul className="select-film-dropdown">
          {listFilm.map((item, index) => (
            <li
            key={index}
              onClick={() =>
                setChoseFilm({ maPhim: item.maPhim, tenPhim: item.tenPhim })
              }
            >
              {item.tenPhim}
            </li>
          ))}
        </ul>
      </div>
      <div className="select">
        <div className="dropdown-toggle">
          <p>{_.isEmpty(choseFilm) ? "Ngày xem" : choseFilm.tenPhim}</p>
          <IconDropDown className='icon-dropdown'/>
        </div>
        <ul className="select-film-dropdown">
          {listFilm.map((item, index) => (
            <li
            key={index}
              onClick={() =>
                setChoseFilm({ maPhim: item.maPhim, tenPhim: item.tenPhim })
              }
            >
              {item.tenPhim}
            </li>
          ))}
        </ul>
      </div>
      <div className="select">
        <div className="dropdown-toggle">
          <p>{_.isEmpty(choseFilm) ? "Suất chiếu" : choseFilm.tenPhim}</p>
          <IconDropDown className='icon-dropdown'/>
        </div>
        <ul className="select-film-dropdown">
          {listFilm.map((item, index) => (
            <li
            key={index}
              onClick={() =>
                setChoseFilm({ maPhim: item.maPhim, tenPhim: item.tenPhim })
              }
            >
              {item.tenPhim}
            </li>
          ))}
        </ul>
      </div>
      <div className="select end-item">
      <Button variant="contained" color="secondary" className={classNames({'done': false})}>
        Mua vé
      </Button>
      </div>
      
    </div>
  );
};

export default memo(HomeTools);
