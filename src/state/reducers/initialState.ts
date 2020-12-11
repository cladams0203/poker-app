import { GameState } from "../../types";

const deck = [
  { value: "2c", suit: "clubs", displayValue: "2" },
  { value: "3c", suit: "clubs", displayValue: "3" },
  { value: "4c", suit: "clubs", displayValue: "4" },
  { value: "5c", suit: "clubs", displayValue: "5" },
  { value: "6c", suit: "clubs", displayValue: "6" },
  { value: "7c", suit: "clubs", displayValue: "7" },
  { value: "8c", suit: "clubs", displayValue: "8" },
  { value: "9c", suit: "clubs", displayValue: "9" },
  { value: "Tc", suit: "clubs", displayValue: "10" },
  { value: "Jc", suit: "clubs", displayValue: "J" },
  { value: "Qc", suit: "clubs", displayValue: "Q" },
  { value: "Kc", suit: "clubs", displayValue: "K" },
  { value: "Ac", suit: "clubs", displayValue: "A" },
  { value: "2h", suit: "hearts", displayValue: "2" },
  { value: "3h", suit: "hearts", displayValue: "3" },
  { value: "4h", suit: "hearts", displayValue: "4" },
  { value: "5h", suit: "hearts", displayValue: "5" },
  { value: "6h", suit: "hearts", displayValue: "6" },
  { value: "7h", suit: "hearts", displayValue: "7" },
  { value: "8h", suit: "hearts", displayValue: "8" },
  { value: "9h", suit: "hearts", displayValue: "9" },
  { value: "Th", suit: "hearts", displayValue: "10" },
  { value: "Jh", suit: "hearts", displayValue: "J" },
  { value: "Qh", suit: "hearts", displayValue: "Q" },
  { value: "Kh", suit: "hearts", displayValue: "K" },
  { value: "Ah", suit: "hearts", displayValue: "A" },
  { value: "2d", suit: "diamonds", displayValue: "2" },
  { value: "3d", suit: "diamonds", displayValue: "3" },
  { value: "4d", suit: "diamonds", displayValue: "4" },
  { value: "5d", suit: "diamonds", displayValue: "5" },
  { value: "6d", suit: "diamonds", displayValue: "6" },
  { value: "7d", suit: "diamonds", displayValue: "7" },
  { value: "8d", suit: "diamonds", displayValue: "8" },
  { value: "9d", suit: "diamonds", displayValue: "9" },
  { value: "Td", suit: "diamonds", displayValue: "10" },
  { value: "Jd", suit: "diamonds", displayValue: "J" },
  { value: "Qd", suit: "diamonds", displayValue: "Q" },
  { value: "Kd", suit: "diamonds", displayValue: "K" },
  { value: "Ad", suit: "diamonds", displayValue: "A" },
  { value: "2s", suit: "spades", displayValue: "2" },
  { value: "3s", suit: "spades", displayValue: "3" },
  { value: "4s", suit: "spades", displayValue: "4" },
  { value: "5s", suit: "spades", displayValue: "5" },
  { value: "6s", suit: "spades", displayValue: "6" },
  { value: "7s", suit: "spades", displayValue: "7" },
  { value: "8s", suit: "spades", displayValue: "8" },
  { value: "9s", suit: "spades", displayValue: "9" },
  { value: "Ts", suit: "spades", displayValue: "10" },
  { value: "Js", suit: "spades", displayValue: "J" },
  { value: "Qs", suit: "spades", displayValue: "Q" },
  { value: "Ks", suit: "spades", displayValue: "K" },
  { value: "As", suit: "spades", displayValue: "A" },
];

export const gameState: GameState = {
  deck: deck,
  players: [],
  pot: 0,
  smallBlind: 0,
  bigBlind: 0,
  community: [],
  burn: [],
};
