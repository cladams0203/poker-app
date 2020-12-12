import { User, Player } from "../../types/index";

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
export const tommy: User = {
  username: "Tommy",
  email: "",
  id: Date.now(),
};
export const chris: User = {
  username: "Chris",
  email: "",
  id: Date.now(),
};

export const computerPlayers: Player[] = [
  {
    user: joy,
    playerId: 1,
    chips: 1000,
    currentHand: [],
    finalHand: [],
  },
  {
    user: sam,
    playerId: 2,
    chips: 1000,
    currentHand: [],
    finalHand: [],
  },
  {
    user: tommy,
    playerId: 3,
    chips: 1000,
    currentHand: [],
    finalHand: [],
  },
  {
    user: chris,
    playerId: 4,
    chips: 1000,
    currentHand: [],
    finalHand: [],
  },
];
