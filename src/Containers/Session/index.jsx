import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { connect } from "react-redux";
import _ from "lodash";
import { getCinema } from "../../Actions/Cinema";
import { getShowTimes } from "../../Actions/Cinema";
import "./style.scss";

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

  useEffect(() => {
    if (_.isEmpty(props.cinemaList) && _.isEmpty(props.showTimesList)) {
      props.getCinema();
      props.getShowTimes("GP09");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleActiveCol = index => {
    setValue(index);
  };

  // const convertTime = time => {
  //   var d = new Date(time + "Z");
  //   return d.getUTCHours() + ":" + d.getUTCMinutes();
  // };

  return (
    <div className="wrap">
      <div className="col1_wrap">
        {props.cinemaList.map((item, index) => {
          return (
            <div className="session_logoCinema_wrap">
              <img
                className={
                  index === value
                    ? "session_logoCinema active"
                    : "session_logoCinema"
                }
                src={item.logo}
                alt=""
                onClick={() => {
                  toggleActiveCol(index);
                }}
              />
            </div>
          );
        })}
      </div>

      <div className="col2_wrap">{}</div>
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
