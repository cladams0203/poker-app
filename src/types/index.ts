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
