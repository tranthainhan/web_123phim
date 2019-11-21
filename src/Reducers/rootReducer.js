import {combineReducers} from 'redux';
import toggleDialog from './Dialog';

import movieReducer from "./MovieReducer";
import movieDetailReducer from "./MovieDetailReducer";
import user from './User'

const rootReducer = combineReducers({
    toggleDialog,
    user,
    moviesList : movieReducer,
    movieDetail: movieDetailReducer,
})

export default rootReducer;