import React, { memo, useState, useEffect } from "react";
import "./style.scss";
import _ from "lodash";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Showtimes from "../FilmDetailShowtimes";
import RateOfFilmDetail from "../RateOfFilmDetail";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

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

function SimpleTabs(props) {
  const [value, setValue] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (_.isEmpty(props.film)) {
      let delay = _.debounce(() => setIsLoading(false), 2000);
      delay();
    }
  }, [props.film]);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="film-detail_tabs">
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
      >
        <Tab label="Lịch chiếu" />
        <Tab label="Đánh giá" />
      </Tabs>
      <TabPanel value={value} index={0} className="showtimes">
        <Showtimes cinema={props.film.heThongRapChieu} />
        {isLoading && (
          <div className="loading">
            <SkeletonTheme color="#bbb4b4">
              <Skeleton width="100%" height="100%" />
            </SkeletonTheme>
          </div>
        )}
      </TabPanel>
      <TabPanel value={value} index={1} className="rating">
        <RateOfFilmDetail />
      </TabPanel>
    </div>
  );
}
export default memo(SimpleTabs);
