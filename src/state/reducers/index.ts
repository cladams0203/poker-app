import { combineReducers } from "redux";
import { AppState } from "../../types";
import { gameReducer } from "./gameReducer";

export const rootReducer = combineReducers<AppState>({
  game: gameReducer,
});
