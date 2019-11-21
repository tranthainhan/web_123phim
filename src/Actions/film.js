import api from '../Api/film';
import * as Types from "../Constants/Movie";

export const getFilm = () => {
    return api.get('LayDanhSachPhim?maNhom=GP09');
}

export const getFilmList = () => {
    return (dispatch) => {
        api
            .get('LayDanhSachPhim?maNhom=GP09')
            .then((result) => {
                dispatch({
                    type: Types.GET_MOVIES_LIST,
                    payload: result.data,
                })
            })
            .catch(err => console.log(err.message))
    }
}

export const getTicket = (maPhim, callback) => {
    return (dispatch) => {
        api
            .get('LayThongTinPhim', {
                params: { maPhim }
            })
            .then((result) => {
                dispatch({
                    type: Types.GET_TICKET,
                    payload: result.data,
                })
                if (callback) callback();
            })
            .catch(err => console.log(err.message))
    }
}