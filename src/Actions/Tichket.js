import * as types from "../Constants/Ticket";
import apiTicket from "../Api/ticket";
import apiCinema from "../Api/cinema";

const listCinema = {
  BHD: "BHDStar",
  CGV: "CGV",
  CNS: "CineStar",
  GLX: "Galaxy",
  Lotte: "LotteCinima"
};

export const getTicket = (maLichChieu, dispatch) => {
  return apiTicket
    .get(`LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
    .then(result => result.data)
    .then(async result => {
      let codeCinema = listCinema[result.thongTinPhim.tenCumRap.split(" ")[0]];
      const logoCinema = await apiCinema
        .get(`LayThongTinHeThongRap?maHeThongRap=${codeCinema}`)
        .then(result => result.data[0].logo);
      const ticket = {
        ...result,
        thongTinPhim: { ...result.thongTinPhim, logoCinema }
      };
      dispatch({ type: types.GET_TICHKET, ticket: ticket });
    });
};
