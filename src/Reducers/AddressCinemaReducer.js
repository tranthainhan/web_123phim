import * as Types from "../Constants/AddressCinema";

const initialState = [];

const addressCinemaReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_ADDRESS_CINEMA:
            return action.payload;
        default:
            return state;
    }
}

export default addressCinemaReducer;