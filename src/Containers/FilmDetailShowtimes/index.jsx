import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./style.scss";
import cinemaApi from "../../Api/cinema";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import _ from "lodash";
import TabsChild from "./TabsChild";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

export default function Showtimes({ cinema }) {
  const [value, setValue] = useState(0);
  const [logos, setLogos] = useState([]);
  let refs = useRef([]);

  const handleChange = newValue => {
    setValue(newValue);
  };
  useEffect(() => {
    if (_.isEmpty(logos)) {
      cinemaApi.get("LayThongTinHeThongRap").then(result =>
        setLogos(
          result.data.reduce(
            (accumu, currentValue) => ({
              ...accumu,
              [currentValue.maHeThongRap]: currentValue.logo
            }),
            {}
          )
        )
      );
    }

    if (cinema) {
      const node = ReactDOM.findDOMNode(refs.current[0]);
      node.classList.add("active");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cinema]);
  const toggleActive = location => {
    refs.current.forEach((item, index) => {
      if (location === index) {
        item.classList.add("active");
      } else item.classList.remove("active");
    });
  };
  return (
    <>
      <ul className="cinema">
        {cinema &&
          cinema.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  handleChange(index);
                  toggleActive(index);
                }}
                ref={li => (refs.current[index] = li)}
              >
                <img src={logos[item.maHeThongRap]} alt="..." />
                <p>{item.tenHeThongRap}</p>
              </li>
            );
          })}
      </ul>
      <div className="showings">
        {cinema &&
          cinema.map((item, index) => {
            return (
              <TabPanel value={value} index={index} key={index}>
                <TabsChild item={item.cumRapChieu[0]} />
              </TabPanel>
            );
          })}
      </div>
    </>
  );
}
