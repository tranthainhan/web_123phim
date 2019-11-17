import * as Types from "../Constants/Movie";
import api from "../Api";

export const getMoviesList = () => {
    return (dispatch) => {
        api
            .get("QuanLyPhim/LayDanhSachPhim?maNhom=GP01")
            .then((result) => {
                dispatch({
                    type: Types.GET_MOVIES_LIST,
                    payload: result.data,
                })
                console.log(result.data)
            })
            .catch(err => console.log(err.message))
    }
}