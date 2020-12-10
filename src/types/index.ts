import { SHUFFLE, DEAL } from "../state/actions/gameActions";

export interface Card {
  value: string;
  suit: string;
  displayValue: string;
}

export interface GameState {
  deck: Card[];
}

export interface AppState {
  game: GameState;
}

export type GameActions = { type: typeof SHUFFLE } | { type: typeof DEAL };
