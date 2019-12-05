import * as Types from "../Constants/Cinema";
import api from "../Api/cinema";

export const getCinema = () => {
  return dispatch => {
    api
      .get("LayThongTinHeThongRap")
      .then(result => {
        dispatch({
          type: Types.GET_CINEMA_LIST,
          payload: result.data
        });
      })
      .catch(err => console.log(err.message));
  };
};

export const getShowTimes = maHeThongRap => {
  return dispatch => {
    api
      .get(`LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}`)
      .then(result => {
        dispatch({
          type: Types.GET_SHOWTIMES,
          payload: result.data
        });
      })
      .catch(err => console.log(err.message));
  };
};

export const getCinemaDetail = codeCinema => {
  return api.get(`LayThongTinHeThongRap?maHeThongRap=${codeCinema}`);
};
