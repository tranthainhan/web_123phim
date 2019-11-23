import {combineReducers} from 'redux';
import toggleDialog from './Dialog';

import movieReducer from "./MovieReducer";
import movieDetailReducer from "./MovieDetailReducer";
import user from './User';
import cinemaReducer from "./CinemaReducer";
import addressCinemaReducer from "./AddressCinemaReducer";

const rootReducer = combineReducers({
    toggleDialog,
    user,
    moviesList : movieReducer,
    movieDetail: movieDetailReducer,
    cinemaList: cinemaReducer,
    addressCinema: addressCinemaReducer,
})

export default rootReducer;