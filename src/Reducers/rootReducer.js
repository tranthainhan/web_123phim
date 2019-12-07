import { combineReducers } from "redux";
import toggleDialog from "./Dialog";

import movieReducer from "./MovieReducer";
import movieDetailReducer from "./MovieDetailReducer";
import user from "./User";
import cinemaReducer from "./CinemaReducer";
import showTimesReducer from "./ShowTimesReducer";
import ticket from "./TicketReducer";
import stepper from "./Stepper";
import buyTicket from "./BuyTicket";

const rootReducer = combineReducers({
    toggleDialog,
    user,
    moviesList : movieReducer,
    movieDetail: movieDetailReducer,
    cinemaList: cinemaReducer,
    showTimes: showTimesReducer,
      ticket,
  stepper,
  buyTicket
})


export default rootReducer;
