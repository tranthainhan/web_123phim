import * as Types from "../Constants/AddressCinema";
import api from "../Api/cinema";

export const getAddressCinema = (maHeThongRap) => {
    return (dispatch) => {
        api
            .get(`LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`)
            .then((result) => {
                dispatch({
                    type: Types.GET_ADDRESS_CINEMA,
                    payload: result.data,
                })
            })
            .catch(err => console.log(err.message))
    }
}