import * as Types from "../Constants/Cinema";

const initialState = [];

const showTimesReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_SHOWTIMES:
            return action.payload;
        default:
            return state;
    }
}

export default showTimesReducer;