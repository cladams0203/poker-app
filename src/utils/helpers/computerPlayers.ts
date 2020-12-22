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
    isFolded: true,
    isButton: true,
    isSmall: false,
    isLarge: false,
    tablePosition: 0,
  },
  {
    user: sam,
    playerId: 2,
    chips: 1000,
    currentHand: [],
    finalHand: [],
    activeUser: false,
    isFolded: false,
    isButton: false,
    isSmall: true,
    isLarge: false,
    tablePosition: 0,
  },
  {
    user: tommy,
    playerId: 3,
    chips: 1000,
    currentHand: [],
    finalHand: [],
    activeUser: false,
    isFolded: false,
    isButton: false,
    isSmall: false,
    isLarge: true,
    tablePosition: 0,
  },
  {
    user: chris,
    playerId: 4,
    chips: 1000,
    currentHand: [],
    finalHand: [],
    activeUser: true,
    isFolded: false,
    isButton: false,
    isSmall: false,
    isLarge: true,
    tablePosition: 0,
  },
  {
    user: josh,
    playerId: 5,
    chips: 1000,
    currentHand: [],
    finalHand: [],
    activeUser: false,
    isFolded: true,
    isButton: false,
    isSmall: false,
    isLarge: false,
    tablePosition: 0,
  },
  {
    user: laura,
    playerId: 6,
    chips: 1000,
    currentHand: [],
    finalHand: [],
    activeUser: false,
    isFolded: false,
    isButton: false,
    isSmall: false,
    isLarge: false,
    tablePosition: 0,
  },
  {
    user: jason,
    playerId: 7,
    chips: 1000,
    currentHand: [],
    finalHand: [],
    activeUser: false,
    isFolded: false,
    isButton: false,
    isSmall: false,
    isLarge: false,
    tablePosition: 0,
  },
  {
    user: brian,
    playerId: 8,
    chips: 1000,
    currentHand: [],
    finalHand: [],
    activeUser: false,
    isFolded: false,
    isButton: false,
    isSmall: false,
    isLarge: false,
    tablePosition: 0,
  },
  {
    user: mike,
    playerId: 9,
    chips: 1000,
    currentHand: [],
    finalHand: [],
    activeUser: false,
    isFolded: false,
    isButton: false,
    isSmall: false,
    isLarge: false,
    tablePosition: 0,
  },
];
