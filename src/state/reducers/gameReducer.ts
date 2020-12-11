import { GameActions, Player } from "../../types";
import { gameState } from "./initialState";
import {
  SHUFFLE,
  ADD_TO_HAND,
  START,
  FLOP,
  TURN_RIVER,
} from "../actions/gameActions";
import { shuffle } from "../../utils/shuffle";

export const gameReducer = (state = gameState, action: GameActions) => {
  switch (action.type) {
    case SHUFFLE:
      return {
        ...state,
        deck: shuffle(state.deck),
      };
    case START:
      return {
        ...state,
        players: action.payload,
      };
    case ADD_TO_HAND:
      return {
        ...state,
        players: state.players.map((item: Player) => {
          console.log(item.playerId);
          if (item.playerId === action.payload.id) {
            return {
              ...item,
              currentHand: [...item.currentHand, state.deck[0]],
            };
          } else {
            return item;
          }
        }),
        deck: state.deck.slice(1),
      };
    case FLOP:
      return {
        ...state,
        burn: [...state.burn, state.deck[0]],
        community: [state.deck[1], state.deck[2], state.deck[3]],
        deck: state.deck.slice(4),
      };
    case TURN_RIVER:
      return {
        ...state,
        burn: [...state.burn, state.deck[0]],
        community: [...state.community, state.deck[1]],
        deck: state.deck.slice(2),
      };
    default:
      return state;
  }
};
