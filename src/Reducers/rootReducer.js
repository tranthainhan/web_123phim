import {combineReducers} from 'redux';
import toggleDialog from './Dialog';
import user from './User'

const rootReducer = combineReducers({
    toggleDialog,
    user
});
export default rootReducer;