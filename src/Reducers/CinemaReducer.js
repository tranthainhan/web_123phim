import * as Types from "../Constants/Cinema";

const initialState = [];

const cinemaReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_CINEMA_LIST:
            return action.payload;
        default:
            return state;
    }
}

export default cinemaReducer;