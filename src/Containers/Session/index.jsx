import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import classNames from "classnames";
import { connect } from "react-redux";
import _ from "lodash";
import { getCinema } from "../../Actions/Cinema";
import { getShowTimes } from "../../Actions/Cinema";
import "./style.scss";

import Col2 from "./Col2";

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
      <Box p={2}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function Session(props) {
  const [value, setValue] = React.useState(0);
  let refs = useRef([]);

  useEffect(() => {
    if (_.isEmpty(props.cinemaList) && _.isEmpty(props.showTimesList)) {
      props.getCinema();
      props.getShowTimes("GP09");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = newValue => {
    setValue(newValue);
  };

  const toggleActive = location => {
    refs.current.forEach((item, index) => {
      if (location === index) {
        item.classList.add("active");
      } else item.classList.remove("active");
    });
  };

  return (
    <div className="tabs-showtimes wrap">
      <div className="col1_wrap">
        {props.cinemaList &&
          props.cinemaList.map((item, index) => {
            return (
              <div key={index} className="session_logoCinema_wrap">
                <img
                  className={classNames("session_logoCinema", {
                    active: index === 0
                  })}
                  src={item.logo}
                  alt=""
                  onClick={() => {
                    handleChange(index);
                    toggleActive(index);
                  }}
                  ref={img => (refs.current[index] = img)}
                />
              </div>
            );
          })}
      </div>

      <div className="col23_wrap">
        {props.showTimesList.map((wrap, index) => {
          return (
            <TabPanel value={value} index={index} key={index}>
              <Col2 wrap={wrap} />
            </TabPanel>
          );
        })}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    cinemaList: state.cinemaList,
    showTimesList: state.showTimes
  };
};

export default connect(mapStateToProps, { getCinema, getShowTimes })(Session);
