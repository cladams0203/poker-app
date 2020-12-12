import {
  SHUFFLE,
  REMOVE_FROM_DECK,
  START,
  ADD_TO_HAND,
  FLOP,
  TURN_RIVER,
  FINAL_HAND,
  WINNER,
} from "../state/actions/gameActions";

export interface Card {
  value: string;
  suit: string;
  displayValue: string;
}

export interface GameState {
  deck: Card[];
  players: Player[];
  pot: number;
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
}

export type GameActions =
  | { type: typeof SHUFFLE }
  | { type: typeof REMOVE_FROM_DECK }
  | { type: typeof START; payload: Player[] }
  | { type: typeof ADD_TO_HAND; payload: { id: number } }
  | { type: typeof FLOP }
  | { type: typeof TURN_RIVER }
  | { type: typeof FINAL_HAND; payload: Player[] }
  | { type: typeof WINNER; payload: Winner };

export interface PlayingCardProps {
  item: Card;
}

export interface PlayerPositionProps {
  player: Player;
  key: number;
}

export interface Winner {
  winners: Player[];
  desc: string;
}
