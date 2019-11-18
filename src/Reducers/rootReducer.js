import {combineReducers} from 'redux';
import toggleDialog from './Dialog';

import movieReducer from "./MovieReducer";
import user from './User'

const rootReducer = combineReducers({
    toggleDialog,
    user,
    moviesList : movieReducer,
})

export default rootReducer;