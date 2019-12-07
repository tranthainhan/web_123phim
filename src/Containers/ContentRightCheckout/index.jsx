import React, { useState } from "react";
import "./style.scss";
import { connect } from "react-redux";
import classNames from "classnames";
import imgBank from "../../imgBank";
import imgZaloPay from "../../Assets/img/zalopay.png";
import imgCC from "../../Assets/img/cc.png";
import imgAtm from "../../Assets/img/atm.png";
import imgPayoo from "../../Assets/img/payoo.png";
import imgArrow from "../../Assets/img/arrow.png";
import _ from "lodash";
import { Radio } from "@material-ui/core";

const ContentRightCheckout = ({ ticket, buyTicket }) => {
  let [payment, setPayment] = useState();

  const handlePayment = e => {
    setPayment(e.target.value);
  };
  console.log(imgBank);
  return (
    <div className="right">
      <div className="total-money">
        {`${buyTicket &&
          (
            buyTicket.quantity.ticket * 75000 +
            buyTicket.quantity.ticketVip * 90000
          )
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ`}
      </div>
      {!_.isEmpty(ticket) && (
        <div className="info-showtime">
          <div className="name-film">{ticket.thongTinPhim.tenPhim}</div>
          <div className="address">{ticket.thongTinPhim.tenCumRap}</div>
          <div className="time-vs-cinema">{`${ticket.thongTinPhim.ngayChieu}-${ticket.thongTinPhim.gioChieu}-${ticket.thongTinPhim.tenRap}`}</div>
        </div>
      )}
      <div className="seat">
        <div className="seat-choose">
          Ghế: {`${buyTicket.infoSeat.map(item => item.nameChair).join(", ")}`}
        </div>
      </div>
      <div className="email">
        <p className="m-0">
          <label htmlFor="email">E-Mail:</label>
        </p>
        <input type="text" id="email" />
      </div>
      <div className="phone">
        <p className="m-0">
          <label htmlFor="phone">Phone:</label>
        </p>
        <input type="text" id="phone" />
      </div>
      <div className="payments">
        <h5>Hình thức thanh toán: </h5>
        <ul>
          <li>
            <Radio
              checked={payment === "zalopay"}
              color="primary"
              name="method"
              value="zalopay"
              onChange={handlePayment}
            />
            <img src={imgZaloPay} alt="..." />
            <span>Thanh toán qua ZaloPay</span>
          </li>
          <li>
            <Radio
              checked={payment === "cc"}
              color="primary"
              name="method"
              value="cc"
              onChange={handlePayment}
            />
            <img src={imgCC} alt="..." />
            <span>Visa, Master, JCB</span>
          </li>
          <li className="dropdown">
            <div className="toggle-dropdown">
              <Radio
                checked={payment === "atm"}
                color="primary"
                name="method"
                value="atm"
                onChange={handlePayment}
              />
              <img src={imgAtm} alt="..." />
              <span>Thẻ ATM nội địa</span>
              <div
                className={classNames("arrow", { rotate: payment === "atm" })}
              >
                <img src={imgArrow} alt="..." />
              </div>
            </div>
            <div
              className={classNames("content-dropdown", {
                open: payment === "atm"
              })}
            >
              {imgBank.map(item => (
                <img src={item} alt="..." />
              ))}
            </div>
          </li>
          <li>
            <Radio
              checked={payment === "payoo"}
              color="primary"
              name="method"
              value="payoo"
              onChange={handlePayment}
            />
            <img src={imgPayoo} alt="..." />
            <span>Thanh toán tại cửa hàng tiện ích</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    buyTicket: state.buyTicket,
    ticket: state.ticket
  };
};

export default connect(mapStateToProps, null)(ContentRightCheckout);
