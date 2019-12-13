import React, { useState, useEffect } from "react";
import "./style.scss";
import { connect } from "react-redux";
import { nextStep } from "../../Actions/Stepper";
import { sendBuyTicket } from "../../Actions/BuyTicket";
import classNames from "classnames";
import imgWarning from "../../Assets/img/warning.png";
import imgZaloPayMethod from "../../Assets/img/zalopaymethod.png";
import imgQR from "../../Assets/img/QR.png";
import imgBank from "../../imgBank";
import imgZaloPay from "../../Assets/img/zalopay.png";
import imgCC from "../../Assets/img/cc.png";
import imgAtm from "../../Assets/img/atm.png";
import imgPayoo from "../../Assets/img/payoo.png";
import imgArrow from "../../Assets/img/arrow.png";
import _ from "lodash";
import { Radio, Dialog } from "@material-ui/core";
import TimeOut from "../TimeOut";
import Swal from "sweetalert2";

const ContentRightCheckout = ({ ticket, buyTicket, nextStep }) => {
  let [payment, setPayment] = useState();
  let [open, setOpen] = useState(false);

  useEffect(() => {
    if (buyTicket.quantity.ticket === 0 && buyTicket.quantity.ticketVip === 0) {
      let delay = _.debounce(() => {
        setPayment();
      }, 350);
      delay();
    }
    if (open) {
      new Promise(resolve => {
        let delay = _.debounce(() => resolve(setOpen(false)), 5000);
        delay();
      })
        .then(() => {
          let maLichChieu = ticket.thongTinPhim.maLichChieu;
          let danhSachVe = buyTicket.infoSeat.map(item => ({
            maGhe: item.codeChair,
            giaVe: item.typeChair === "Thuong" ? 75000 : 90000
          }));
          let taiKhoanNguoiDung = JSON.parse(localStorage.getItem("user"))
            .taiKhoan;
          let infoSeat = { maLichChieu, danhSachVe, taiKhoanNguoiDung };
          sendBuyTicket(infoSeat);
        })
        .then(() =>
          Swal.fire({
            icon: "success",
            timer: 1500,
            showConfirmButton: false
          })
        )
        .then(() => nextStep());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [buyTicket, open]);

  const handlePayment = e => {
    setPayment(e.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
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
            Ghế:{" "}
            {`${buyTicket.infoSeat.map(item => item.nameChair).join(", ")}`}
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
                {imgBank.map((item, index) => (
                  <img src={item} alt="..." key={index} />
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
        <div className="note">
          <span>
            <img src={imgWarning} alt="..." />
            Vé đã mua không thể đổi hoặc hoàn tiền <br />
          </span>
          <span>
            Mã vé sẽ được gửi qua tin nhắn
            <span style={{ color: "#f79320" }}> ZMS</span> (tin nhắn Zalo) và{" "}
            <span style={{ color: "#f79320" }}>Email</span> đã nhập.
          </span>
        </div>
        <div
          className={classNames("btn-buyticket", {
            done:
              buyTicket.infoSeat.length ===
                buyTicket.quantity.ticket + buyTicket.quantity.ticketVip &&
              payment
          })}
          onClick={handleClickOpen}
        >
          Đặt vé
        </div>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        className="dialog-buy-ticket"
      >
        <div className="wrap-dialog">
          <div className="header">
            <span>XÁC NHẬN THANH TOÁN VỚI</span>
            <img src={imgZaloPayMethod} alt="..." />
          </div>
          <div className="body">
            <img src={imgQR} alt="..." />
          </div>
          <div className="footer">
            <span>
              Quét QR code để thanh toán
              <span
                style={{ color: "#008fe5" }}
              >{` ${buyTicket.infoSeat.length} vé `}</span>
              với số tiền
              <span style={{ color: "#04be04" }}>{` ${buyTicket &&
                (
                  buyTicket.quantity.ticket * 75000 +
                  buyTicket.quantity.ticketVip * 90000
                )
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ`}</span>
            </span>
            <br />
            <span>
              Thời gian còn lại <TimeOut time={300} />{" "}
            </span>
          </div>
        </div>
      </Dialog>
    </>
  );
};
const mapStateToProps = state => {
  return {
    buyTicket: state.buyTicket
  };
};
const mapDispatchToProps = dispatch => {
  return {
    nextStep: () => dispatch(nextStep())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentRightCheckout);
