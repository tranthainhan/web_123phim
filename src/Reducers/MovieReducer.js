import * as Types from "../Constants/Movie";

const initialState = [];

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_MOVIES_LIST:
            return action.payload;
        case Types.GET_MOVIES_PAGINATION:
            return action.payload;
        default:
            return state;
    }
}

export default movieReducer;