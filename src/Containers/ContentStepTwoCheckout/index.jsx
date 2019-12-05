import React, { useState } from "react";
import "./style.scss";
import imgNotChoose from "../../Assets/img/notchoose.png";
import { connect } from "react-redux";
import classNames from "classnames";
import _ from "lodash";
import imgScreen from "../../Assets/img/screen.png";
import TimeOut from "../TimeOut";

const ContentStepTwoCheckout = ({ ticket, buyTicket }) => {
  const [chair, setChair] = useState([]);
  const [chairVip, setChairVip] = useState([]);
  const film = ticket.thongTinPhim;
  const arrChair = _.chunk(ticket.danhSachGhe, 16);

  const chooseChair = (codeChair, location) => {
    console.log(codeChair, location);
  };
  const chooseChairVip = (codeChair, location) => {
    console.log(codeChair, location);
  };
  console.log(ticket);
  return (
    <div className="step-2">
      <div className="header">
        <div className="info-showtimes">
          <img src={film && film.logoCinema} alt="..." />
          <div>
            <p>{film && film.tenCumRap}</p>
            <span>
              {film && `${film.ngayChieu} - ${film.gioChieu} - ${film.tenRap}`}
            </span>
          </div>
        </div>
        <div className="time-out">
          <p>Thời gian giữ ghế:</p>
          <TimeOut time={300} />
        </div>
      </div>
      <div className="screen">
        <img src={imgScreen} alt="..." />
      </div>
      <div className="chair">
        {arrChair.map((rowOfChair, indexRowChair) => (
          <div className="row-chair" key={indexRowChair}>
            <div className="name-row-chair">
              {String.fromCharCode(65 + indexRowChair)}
            </div>
            {rowOfChair.map((chairItem, index) =>
              chairItem.taiKhoanNguoiDat !== null ? (
                <div className="chair-item not-available">
                  <img src={imgNotChoose} alt="...." />
                </div>
              ) : (
                <div
                  className={classNames("chair-item", {
                    "chair-vip": chairItem.loaiGhe === "Vip"
                  })}
                  key={index}
                  data-code={chairItem.maGhe}
                  data-location={`${String.fromCharCode(
                    65 + indexRowChair
                  )}-${index + 1}`}
                  onClick={e => {
                    let codeChair = chairItem.maGhe;
                    let location = `${String.fromCharCode(
                      65 + indexRowChair
                    )}-${index + 1}`;
                    if (chairItem.loaiGhe === "Thuong") {
                      chooseChair(codeChair, location);
                    } else {
                      chooseChairVip(codeChair, location);
                    }
                  }}
                >
                  <span>{index + 1}</span>
                </div>
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    ticket: state.ticket,
    buyTicket: state.buyTicket
  };
};

export default connect(mapStateToProps, null)(ContentStepTwoCheckout);
