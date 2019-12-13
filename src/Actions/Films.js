import * as types from "../Constants/Films";
import api from "../Api/film";

export const getFilms = () => {
  return dispatch => {
    api.get("LayDanhSachPhim?maNhom=GP09").then(result =>
      // setTimeout(
      //   () => dispatch({ type: types.GET_FILMS, payload: result.data }),
      //   100000
      // )
      dispatch({ type: types.GET_FILMS, payload: result.data })
    );
  };
};
