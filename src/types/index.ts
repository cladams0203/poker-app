import {
  SHUFFLE,
  REMOVE_FROM_DECK,
  START,
  ADD_TO_HAND,
  FLOP,
  TURN_RIVER,
} from "../state/actions/gameActions";

export interface Card {
  value: string;
  suit: string;
  displayValue: string;
}

export interface GameState {
  deck: Card[];
  players: Player[];
  pot: Number;
  smallBlind: Number;
  bigBlind: Number;
  community: Card[];
  burn: Card[];
}

export interface AppState {
  game: GameState;
}
export interface User {
  username: string;
  email: string;
  id: Number;
}

export interface Player {
  user: User;
  playerId: Number;
  chips: Number;
  currentHand: Card[];
}

export type GameActions =
  | { type: typeof SHUFFLE }
  | { type: typeof REMOVE_FROM_DECK }
  | { type: typeof START; payload: Player[] }
  | { type: typeof ADD_TO_HAND; payload: { id: Number } }
  | { type: typeof FLOP }
  | { type: typeof TURN_RIVER };

export interface PlayingCardProps {
  item: Card;
}

export interface PlayerPositionProps {
  player: Player;
}
