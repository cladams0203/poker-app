import { combineReducers } from "redux";
import { AppState } from "../../types";
import { gameReducer } from "./gameReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers<AppState>({
  game: gameReducer,
  user: userReducer,
});
