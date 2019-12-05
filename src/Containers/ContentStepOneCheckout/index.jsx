import React, { useState, useRef } from "react";
import "./style.scss";
import _ from "lodash";
import { useDispatch } from "react-redux";
import { sendTypeVsQuantity } from "../../Actions/BuyTicket";
import { nextStep } from "../../Actions/Stepper";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const ContentStepOneCheckout = ({ film }) => {
  const [ticket, setTicket] = useState(0);
  const [ticketVip, setTicketVip] = useState(0);

  const totalMoney = ticket * 75000 + ticketVip * 90000;
  const dispatch = useDispatch();
  const refs = useRef(false);

  const plusTicket = type => {
    if (type === "VIP") {
      setTicketVip(ticketVip + 1);
    } else {
      setTicket(ticket + 1);
    }
    effect();
  };

  const minusTicket = type => {
    if (type === "VIP") {
      setTicketVip(ticketVip === 0 ? 0 : ticketVip - 1);
    } else {
      setTicket(ticket === 0 ? 0 : ticket - 1);
    }
    effect();
  };

  const effect = async () => {
    for (let font = parseInt(refs.current.style.fontSize); font <= 34; font++) {
      await new Promise(resolve => {
        const debounce = _.debounce(
          () => resolve((refs.current.style.fontSize = font + "px")),
          10
        );
        debounce();
      });
    }
    for (let font = 34; font >= 24; font--) {
      await new Promise(resolve => {
        const debounce = _.debounce(
          () => resolve((refs.current.style.fontSize = font + "px")),
          10
        );
        debounce();
      });
    }
  };
  // const effect = _.debounce(async () => {
  //   for (let font = parseInt(refs.current.style.fontSize); font <= 34; font++) {
  //     await new Promise(resolve => {
  //       const debounce = _.debounce(
  //         () => resolve((refs.current.style.fontSize = font + "px")),
  //         10
  //       );
  //       debounce();
  //     });
  //   }
  //   for (let font = 34; font >= 24; font--) {
  //     await new Promise(resolve => {
  //       const debounce = _.debounce(
  //         () => resolve((refs.current.style.fontSize = font + "px")),
  //         10
  //       );
  //       debounce();
  //     });
  //   }
  // }, 10);
  const doneChooseTypeVsQuantity = () => {
    const infoTicket = {
      ticket,
      ticketVip
    };
    dispatch(sendTypeVsQuantity(infoTicket));
    dispatch(nextStep());
  };
  return (
    <div className="step-1">
      <div className="info-showtimes">
        <img src={film && film.logoCinema} alt="..." />
        <div>
          <p>{film && film.tenCumRap}</p>
          <span>
            {film && `${film.ngayChieu} - ${film.gioChieu} - ${film.tenRap}`}
          </span>
        </div>
      </div>
      <div className="choose-type-ticket">
        <div className="ticket">
          <span className="type-ticket">VÉ THƯỜNG</span>
          <span className="price-ticket">75.000 đ</span>
          <div className="quantity">
            <RemoveIcon
              className="minus"
              onClick={() => {
                minusTicket("");
                // effect();
              }}
            />
            <input type="number" min="0" value={ticket} readOnly />
            <AddIcon className="plus" onClick={() => plusTicket("")} />
          </div>
        </div>
        <div className="ticket">
          <span className="type-ticket">VÉ VIP</span>
          <span className="price-ticket">90.000 đ</span>
          <div className="quantity">
            <RemoveIcon className="minus" onClick={() => minusTicket("VIP")} />
            <input type="number" min="0" value={ticketVip} readOnly />
            <AddIcon className="plus" onClick={() => plusTicket("VIP")} />
          </div>
        </div>
      </div>
      <div className="wrap-choose-ticket">
        <div className="choose-ticket">
          <div className="total-money">
            <p>Tổng tiền: </p>
            <span
              ref={span => (refs.current = span)}
              style={{ fontSize: 24 }}
            >{`${totalMoney
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ`}</span>
          </div>
          <button onClick={doneChooseTypeVsQuantity}>CHỌN GHẾ</button>
        </div>
        <p className="note">
          Xin lưu ý, bạn không thể hủy hoặc thay đổi suất chiếu cho vé đã mua.
        </p>
        <div className="hotline">
          <div className="title">
            <p>HOTLINE</p>
            <span>Phí cuộc gọi 1000VND/phút</span>
          </div>
          <p className="phone">1900 545 436</p>
        </div>
      </div>
    </div>
  );
};

export default ContentStepOneCheckout;
