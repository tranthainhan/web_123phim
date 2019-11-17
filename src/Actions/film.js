import api from '../Api/film';



export const getFilm = () => {
    return api.get('LayDanhSachPhim?maNhom=GP09');
}