import React, { useState, useRef, useEffect } from "react";
import "./style.scss";
import imgNotChoose from "../../Assets/img/notchoose.png";
import { connect } from "react-redux";
import { addSeat, removeSeat } from "../../Actions/BuyTicket";
import classNames from "classnames";
import _ from "lodash";
import imgScreen from "../../Assets/img/screen.png";
import TimeOut from "../TimeOut";

const ContentStepTwoCheckout = ({ ticket, buyTicket, addSeat, removeSeat }) => {
  const [chairChoose, setChairChoose] = useState([]);
  const [chairVipChoose, setChairVipChoose] = useState([]);
  const refsChair = useRef([]);
  const film = ticket.thongTinPhim;
  const arrChair = _.chunk(ticket.danhSachGhe, 16);

  useEffect(() => {
    if (chairChoose) {
      let chair = refsChair.current.filter(item =>
        [...item.classList].includes("chair-basic")
      );
      chair.map(item => {
        let codeChair = item.getAttribute("data-code");
        return chairChoose.some(item => item.codeChair === Number(codeChair))
          ? item.classList.add("choose")
          : item.classList.remove("choose");
      });
    }
    if (chairVipChoose) {
      let chairVip = refsChair.current.filter(item =>
        [...item.classList].includes("chair-vip")
      );
      chairVip.map(item => {
        let codeChair = item.getAttribute("data-code");
        return chairVipChoose.some(item => item.codeChair === Number(codeChair))
          ? item.classList.add("choose")
          : item.classList.remove("choose");
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chairChoose, chairVipChoose]);

  const chooseChair = (codeChair, nameChair) => {
    setChairChoose(() => {
      if (chairChoose.some(item => item.codeChair === codeChair)) {
        let newChairChoose = chairChoose.filter(
          item => item.codeChair !== codeChair
        );
        removeSeat(codeChair);
        return newChairChoose;
      } else {
        let newChairChoose = [...chairChoose, { codeChair, nameChair }];
        if (newChairChoose.length > buyTicket.quantity.ticket) {
          newChairChoose = newChairChoose.slice(1);
        }
        addSeat({ codeChair, nameChair, typeChair: "Thuong" });
        return newChairChoose;
      }
    });
  };

  const chooseChairVip = (codeChair, nameChair) => {
    setChairVipChoose(() => {
      if (chairVipChoose.some(item => item.codeChair === codeChair)) {
        let newChairVipChoose = chairVipChoose.filter(
          item => item.codeChair !== codeChair
        );
        removeSeat(codeChair);
        return newChairVipChoose;
      } else {
        let newChairVipChoose = [...chairVipChoose, { codeChair, nameChair }];
        if (newChairVipChoose.length > buyTicket.quantity.ticketVip) {
          newChairVipChoose = newChairVipChoose.slice(1);
        }
        addSeat({ codeChair, nameChair, typeChair: "Vip" });
        return newChairVipChoose;
      }
    });
  };
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
              ) : chairItem.loaiGhe === "Thuong" ? (
                <div
                  className={classNames(
                    "chair-item chair-basic",
                    {
                      "not-choose": buyTicket.quantity.ticket === 0
                    },
                    { "mr-5": index === 1 },
                    { "ml-5": index === 14 },
                    { "mr-0": index === 13 }
                  )}
                  key={index}
                  data-code={chairItem.maGhe}
                  data-location={`${String.fromCharCode(
                    65 + indexRowChair
                  )}-${index + 1}`}
                  onClick={() =>
                    chooseChair(
                      chairItem.maGhe,
                      `${String.fromCharCode(65 + indexRowChair)}-${index + 1}`
                    )
                  }
                  ref={div =>
                    (refsChair.current[indexRowChair * 16 + index] = div)
                  }
                >
                  <span>{index + 1}</span>
                </div>
              ) : (
                <div
                  className={classNames(
                    "chair-item chair-vip",
                    {
                      "not-choose": buyTicket.quantity.ticketVip === 0
                    },
                    { "mr-0": index === 13 }
                  )}
                  key={index}
                  data-code={chairItem.maGhe}
                  data-location={`${String.fromCharCode(
                    65 + indexRowChair
                  )}-${index + 1}`}
                  onClick={() =>
                    chooseChairVip(
                      chairItem.maGhe,
                      `${String.fromCharCode(65 + indexRowChair)}-${index + 1}`
                    )
                  }
                  ref={div =>
                    (refsChair.current[indexRowChair * 16 + index] = div)
                  }
                >
                  <span>{index + 1}</span>
                </div>
              )
            )}
          </div>
        ))}
      </div>
      <div className="note">
        <div className="type-seat">
          <div className="chair-vip">
            <span>Ghế VIP</span>
          </div>
          <div className="chair-basic">
            <span>Ghế thường</span>
          </div>
          <div className="chair-choose">
            <span>Ghế đang chọn</span>
          </div>
          <div className="not-unavailable">
            <span className="img">X</span>
            <span>Ghế đã có người chọn</span>
          </div>
          <div className="not-choose">Ghế không thể chọn</div>
        </div>
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
const mapDispatchToProps = dispatch => {
  return {
    addSeat: infoSeat => dispatch(addSeat(infoSeat)),
    removeSeat: codeChair => dispatch(removeSeat(codeChair))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentStepTwoCheckout);
