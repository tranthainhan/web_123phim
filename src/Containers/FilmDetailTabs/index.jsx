import React from "react";
import "./style.scss";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Showtimes from "../FilmDetailShowtimes";
import RateOfFilmDetail from "../RateOfFilmDetail";

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

export default function SimpleTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
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
      </TabPanel>
      <TabPanel value={value} index={1} className="rating">
        <RateOfFilmDetail />
      </TabPanel>
    </div>
  );
}
