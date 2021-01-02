import { GameActions, Player, GameState } from "../../types";
import { gameState } from "./initialState";
import {
  SHUFFLE,
  ADD_TO_HAND,
  ADD_PLAYERS,
  FLOP,
  TURN_RIVER,
  FINAL_HAND,
  WINNER,
  BET,
  NEW_GAME,
} from "../actions/gameActions";
import { shuffle } from "../../utils/helpers";

export const gameReducer = (
  state: GameState = gameState,
  action: GameActions
) => {
  switch (action.type) {
    case NEW_GAME:
      return {
        ...state,
        table: action.payload,
      };
    case SHUFFLE:
      return {
        ...state,
        deck: shuffle(state.deck),
      };
    case ADD_PLAYERS:
      return {
        ...state,
        players: action.payload,
      };
    case ADD_TO_HAND:
      return {
        ...state,
        players: state.players.map((item: Player) => {
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
        burn: [...state.table.burn, state.deck[0]],
        community: [state.deck[1], state.deck[2], state.deck[3]],
        deck: state.deck.slice(4),
      };
    case TURN_RIVER:
      return {
        ...state,
        burn: [...state.table.burn, state.deck[0]],
        community: [...state.table.community, state.deck[1]],
        deck: state.deck.slice(2),
      };
    case FINAL_HAND:
      return {
        ...state,
        players: action.payload,
      };
    case WINNER:
      return {
        ...state,
        winner: action.payload,
      };
    case BET:
      return {
        ...state,
        currentBet: action.payload.amt,
        pot: (state.table.pot += action.payload.amt),
        players: state.players.map((item: Player) => {
          if (item.playerId === action.payload.id) {
            return { ...item, chips: (item.chips -= action.payload.amt) };
          }
          return item;
        }),
      };
    default:
      return state;
  }
};
