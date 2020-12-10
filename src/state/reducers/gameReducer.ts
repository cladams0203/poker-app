import { GameActions, Card } from "../../types";
import { gameState } from "./initialState";
import { SHUFFLE, DEAL } from "../actions/gameActions";
import { shuffle } from "../../utils/shuffle";

export const gameReducer = (state = gameState, action: GameActions) => {
  switch (action.type) {
    case SHUFFLE:
      return {
        ...state,
        deck: shuffle(state.deck),
      };
    default:
      return state;
  }
};
