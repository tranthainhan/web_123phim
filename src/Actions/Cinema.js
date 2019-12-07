import * as Types from "../Constants/Cinema";
import api from "../Api/cinema";

export const getCinema = () => {

    return (dispatch) => {
        return api
            .get('LayThongTinHeThongRap')
            .then((result) => {
                return dispatch({
                    type: Types.GET_CINEMA_LIST,
                    payload: result.data,
                })
            })
    }
}

export const getShowTimes = (maNhom) => {
    return (dispatch) => {
        return api
            .get(`LayThongTinLichChieuHeThongRap?maNhom=${maNhom}`)
            .then((result) => {
                return dispatch({
                    type: Types.GET_SHOWTIMES,
                    payload: result.data
                })
            })
    }
}
export const getCinemaDetail = codeCinema => {
  return api.get(`LayThongTinHeThongRap?maHeThongRap=${codeCinema}`);
};
