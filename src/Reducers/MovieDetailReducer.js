import * as Types from "../Constants/Movie";

const initialState = {};

const movieDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_TICKET:
            return action.payload;
        default:
            return state;
    }
}

export default movieDetailReducer;