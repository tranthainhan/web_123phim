import {combineReducers} from 'redux';
import toggleDialog from './Dialog';

import movieReducer from "./MovieReducer";
import movieDetailReducer from "./MovieDetailReducer";
import user from './User';
import cinemaReducer from "./CinemaReducer";
import showTimesReducer from "./ShowTimesReducer";

const rootReducer = combineReducers({
    toggleDialog,
    user,
    moviesList : movieReducer,
    movieDetail: movieDetailReducer,
    cinemaList: cinemaReducer,
    showTimes: showTimesReducer,
})

export default rootReducer;