import * as Types from "../Constants/Cinema";
import api from "../Api/cinema";

export const getCinema = () => {
    return (dispatch) => {
        api
            .get('LayThongTinHeThongRap')
            .then((result) => {
                dispatch({
                    type: Types.GET_CINEMA_LIST,
                    payload: result.data,
                })
            })
            .catch(err => console.log(err.message))
    }
}