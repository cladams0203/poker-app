import { User, Player } from "../types/index";

export const joy: User = {
  username: "Joy",
  email: "",
  id: Date.now(),
};

export const sam: User = {
  username: "Sam",
  email: "",
  id: Date.now(),
};

export const players: Player[] = [
  {
    user: joy,
    playerId: 1,
    chips: 1000,
    currentHand: [],
  },
  {
    user: sam,
    playerId: 2,
    chips: 1000,
    currentHand: [],
  },
];
