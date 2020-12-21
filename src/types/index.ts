import {
  SHUFFLE,
  REMOVE_FROM_DECK,
  START,
  ADD_TO_HAND,
  FLOP,
  TURN_RIVER,
  FINAL_HAND,
  WINNER,
  BET,
} from "../state/actions/gameActions";
import { ERROR, LOADING, SUCCESS } from "../state/actions/userActions";

export interface Card {
  value: string;
  suit: string;
  displayValue: string;
  image: string;
}

export interface GameState {
  deck: Card[];
  players: Player[];
  pot: number;
  currentBet: number;
  smallBlind: number;
  bigBlind: number;
  community: Card[];
  burn: Card[];
  winner: Winner;
  winningHands: [];
}

export interface AppState {
  game: GameState;
}
export interface User {
  username: string;
  email: string;
  id: number;
}

export interface Player {
  user: User;
  playerId: number;
  chips: number;
  currentHand: Card[];
  finalHand: string[];
  activeUser: boolean;
  isFolded: boolean;
  isSmall: boolean;
  isLarge: boolean;
  isButton: boolean;
}

export type GameActions =
  | { type: typeof SHUFFLE }
  | { type: typeof REMOVE_FROM_DECK }
  | { type: typeof START; payload: Player[] }
  | { type: typeof ADD_TO_HAND; payload: { id: number } }
  | { type: typeof FLOP }
  | { type: typeof TURN_RIVER }
  | { type: typeof FINAL_HAND; payload: Player[] }
  | { type: typeof WINNER; payload: Winner }
  | { type: typeof BET; payload: { id: number; amt: number } };

export interface PlayingCardProps {
  item: Card;
}

export interface PlayerPositionProps {
  player: Player;
  key: number;
  idx: number;
}

export interface Winner {
  winners: Player[];
  desc: string;
}

export interface UserState {
  user: User;
  loading: boolean;
  error: string;
}
export type UserActions =
  | { type: typeof LOADING }
  | { type: typeof ERROR; payload: string }
  | { type: typeof SUCCESS; payload: User };
