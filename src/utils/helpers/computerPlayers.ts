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
export const josh: User = {
  username: "Josh",
  email: "",
  id: Date.now(),
};

export const laura: User = {
  username: "Laura",
  email: "",
  id: Date.now(),
};
export const brian: User = {
  username: "Brian",
  email: "",
  id: Date.now(),
};
export const jason: User = {
  username: "Jason",
  email: "",
  id: Date.now(),
};
export const mike: User = {
  username: "Mike",
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
    activeUser: false,
  },
  {
    user: sam,
    playerId: 2,
    chips: 1000,
    currentHand: [],
    finalHand: [],
    activeUser: false,
  },
  {
    user: tommy,
    playerId: 3,
    chips: 1000,
    currentHand: [],
    finalHand: [],
    activeUser: false,
  },
  {
    user: chris,
    playerId: 4,
    chips: 1000,
    currentHand: [],
    finalHand: [],
    activeUser: true,
  },
  {
    user: josh,
    playerId: 5,
    chips: 1000,
    currentHand: [],
    finalHand: [],
    activeUser: false,
  },
  {
    user: laura,
    playerId: 6,
    chips: 1000,
    currentHand: [],
    finalHand: [],
    activeUser: false,
  },
  {
    user: jason,
    playerId: 7,
    chips: 1000,
    currentHand: [],
    finalHand: [],
    activeUser: false,
  },
  {
    user: brian,
    playerId: 8,
    chips: 1000,
    currentHand: [],
    finalHand: [],
    activeUser: false,
  },
  {
    user: mike,
    playerId: 9,
    chips: 1000,
    currentHand: [],
    finalHand: [],
    activeUser: false,
  },
];
