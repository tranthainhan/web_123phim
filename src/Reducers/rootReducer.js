import {combineReducers} from 'redux';
import toggleDialog from './Dialog';
import movieReducer from "./MovieReducer";

const rootReducer = combineReducers({
    toggleDialog,
    moviesList : movieReducer,
});
export default rootReducer;