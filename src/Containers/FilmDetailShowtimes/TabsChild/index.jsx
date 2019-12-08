import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./style.scss";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggle } from "../../../Actions/Dialog";
import cinemaImg from "../../../Assets/img/cinema.png";
import cinemaImg1 from "../../../Assets/img/cinema1.png";
import img2D from "../../../Assets/img/2_0.png";
import _ from "lodash";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

function TabsChild({ item, ...props }) {
  const [value, setValue] = useState(0);
  const [day, setDay] = useState([]);
  const [cinema, setCinema] = useState([]);
  const refs = useRef([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (_.isEmpty(day)) {
      setDay(() => {
        let day = item.lichChieuPhim.reduce((accuma, current) => {
          const date = new Date(current.ngayChieuGioChieu).toLocaleDateString(
            "en-US"
          );
          return accuma.includes(date) ? accuma : [...accuma, date];
        }, []);
        const unique = new Set(day);
        day = [...unique];
        return day;
      });
    }
    if (!_.isEmpty(day)) {
      setCinema(() => {
        const address = item.tenCumRap;
        const showtimes = day.reduce((accuma, current) => {
          const value = item.lichChieuPhim
            .filter(item => {
              const date = new Date(item.ngayChieuGioChieu).toLocaleDateString(
                "en-Us"
              );
              if (date === current) return item;
              return false;
            })
            .map(item => ({
              code: item.maLichChieu,
              showtime: new Date(item.ngayChieuGioChieu).toLocaleTimeString()
            }));
          accuma[current] = value;
          return accuma;
        }, {});
        return [{ address, showtimes }];
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [day]);
  const handleChange = newValue => {
    setValue(newValue);
  };
  const toggleActive = location => {
    refs.current.forEach((item, index) => {
      if (location === index) {
        ReactDOM.findDOMNode(item).classList.add("active");
      } else ReactDOM.findDOMNode(item).classList.remove("active");
    });
  };
  const openDialogLogin = () => {
    dispatch(toggle());
  };
  console.log(props);
  return (
    <div className="tab-child">
      <div className="show-date">
        <ul>
          {day.map((item, index) => {
            const date = new Date(item);
            const day = date.getDate();
            const dayOfWeek =
              date.getDay() === 6 ? "Chủ nhật" : `Thứ ${date.getDay() + 2}`;
            return (
              <li
                key={index}
                onClick={() => {
                  handleChange(index);
                  toggleActive(index);
                }}
                ref={li => (refs.current[index] = li)}
              >
                <span className="day-of-week">{dayOfWeek}</span>
                <span className="day">{`0${day}`.slice(-2)}</span>
              </li>
            );
          })}
        </ul>
      </div>
      {day.map((itemDay, indexDay) => {
        return (
          <TabPanel
            value={value}
            index={indexDay}
            key={indexDay}
            className="tab-showtimes"
          >
            {cinema.map((itemCinema, index) => {
              return (
                <div className="showtimes-of-day" key={index}>
                  <div className="info-cinema">
                    <img
                      src={indexDay % 2 === 0 ? cinemaImg1 : cinemaImg}
                      alt="..."
                    />
                    <span>{itemCinema.address}</span>
                  </div>
                  <div className="showtimes">
                    <img src={img2D} alt="..." />
                    <ul>
                      {itemCinema.showtimes[itemDay].map((item, index) => {
                        return (
                          <li
                            key={index}
                            onClick={() => {
                              if (localStorage.getItem("user")) {
                                props.history.push(`/checkout/${item.code}`);
                              } else {
                                openDialogLogin();
                              }
                            }}
                          >
                            {item.showtime.slice(0, item.showtime.length - 3)}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </TabPanel>
        );
      })}
    </div>
  );
}
export default withRouter(TabsChild);
