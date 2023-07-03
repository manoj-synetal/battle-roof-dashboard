import { combineReducers } from "redux";
import authReducer from "./authReducer";
import gameReducer from "./gameReducer";
import tournamentReducer from "./tournamentReducer";

const rootReducer = combineReducers({
  authReducer,
  tournamentReducer,
  gameReducer,
});

export default rootReducer;
