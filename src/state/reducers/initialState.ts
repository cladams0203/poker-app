import { GameState, UserState } from "../../types";
import twod from "../../utils/assets/cardDeck/2d.png";
import threed from "../../utils/assets/cardDeck/3d.png";
import fourd from "../../utils/assets/cardDeck/4d.png";
import fived from "../../utils/assets/cardDeck/5d.png";
import sixd from "../../utils/assets/cardDeck/6d.png";
import sevend from "../../utils/assets/cardDeck/7d.png";
import eightd from "../../utils/assets/cardDeck/8d.png";
import nined from "../../utils/assets/cardDeck/9d.png";
import tend from "../../utils/assets/cardDeck/td.png";
import jackd from "../../utils/assets/cardDeck/jd.png";
import queend from "../../utils/assets/cardDeck/qd.png";
import kingd from "../../utils/assets/cardDeck/kd.png";
import aced from "../../utils/assets/cardDeck/ad.png";
import twoc from "../../utils/assets/cardDeck/2c.png";
import threec from "../../utils/assets/cardDeck/3c.png";
import fourc from "../../utils/assets/cardDeck/4c.png";
import fivec from "../../utils/assets/cardDeck/5c.png";
import sixc from "../../utils/assets/cardDeck/6c.png";
import sevenc from "../../utils/assets/cardDeck/7c.png";
import eightc from "../../utils/assets/cardDeck/8c.png";
import ninec from "../../utils/assets/cardDeck/9c.png";
import tenc from "../../utils/assets/cardDeck/tc.png";
import jackc from "../../utils/assets/cardDeck/jc.png";
import queenc from "../../utils/assets/cardDeck/qc.png";
import kingc from "../../utils/assets/cardDeck/kc.png";
import acec from "../../utils/assets/cardDeck/ac.png";
import twoh from "../../utils/assets/cardDeck/2h.png";
import threeh from "../../utils/assets/cardDeck/3h.png";
import fourh from "../../utils/assets/cardDeck/4h.png";
import fiveh from "../../utils/assets/cardDeck/5h.png";
import sixh from "../../utils/assets/cardDeck/6h.png";
import sevenh from "../../utils/assets/cardDeck/7h.png";
import eighth from "../../utils/assets/cardDeck/8h.png";
import nineh from "../../utils/assets/cardDeck/9h.png";
import tenh from "../../utils/assets/cardDeck/th.png";
import jackh from "../../utils/assets/cardDeck/jh.png";
import queenh from "../../utils/assets/cardDeck/qh.png";
import kingh from "../../utils/assets/cardDeck/kh.png";
import aceh from "../../utils/assets/cardDeck/ah.png";
import twos from "../../utils/assets/cardDeck/2s.png";
import threes from "../../utils/assets/cardDeck/3s.png";
import fours from "../../utils/assets/cardDeck/4s.png";
import fives from "../../utils/assets/cardDeck/5s.png";
import sixs from "../../utils/assets/cardDeck/6s.png";
import sevens from "../../utils/assets/cardDeck/7s.png";
import eights from "../../utils/assets/cardDeck/8s.png";
import nines from "../../utils/assets/cardDeck/9s.png";
import tens from "../../utils/assets/cardDeck/ts.png";
import jacks from "../../utils/assets/cardDeck/js.png";
import queens from "../../utils/assets/cardDeck/qs.png";
import kings from "../../utils/assets/cardDeck/ks.png";
import aces from "../../utils/assets/cardDeck/as.png";

const deck = [
  { value: "2c", suit: "clubs", displayValue: "2", image: twoc },
  { value: "3c", suit: "clubs", displayValue: "3", image: threec },
  { value: "4c", suit: "clubs", displayValue: "4", image: fourc },
  { value: "5c", suit: "clubs", displayValue: "5", image: fivec },
  { value: "6c", suit: "clubs", displayValue: "6", image: sixc },
  { value: "7c", suit: "clubs", displayValue: "7", image: sevenc },
  { value: "8c", suit: "clubs", displayValue: "8", image: eightc },
  { value: "9c", suit: "clubs", displayValue: "9", image: ninec },
  { value: "Tc", suit: "clubs", displayValue: "10", image: tenc },
  { value: "Jc", suit: "clubs", displayValue: "J", image: jackc },
  { value: "Qc", suit: "clubs", displayValue: "Q", image: queenc },
  { value: "Kc", suit: "clubs", displayValue: "K", image: kingc },
  { value: "Ac", suit: "clubs", displayValue: "A", image: acec },
  { value: "2h", suit: "hearts", displayValue: "2", image: twoh },
  { value: "3h", suit: "hearts", displayValue: "3", image: threeh },
  { value: "4h", suit: "hearts", displayValue: "4", image: fourh },
  { value: "5h", suit: "hearts", displayValue: "5", image: fiveh },
  { value: "6h", suit: "hearts", displayValue: "6", image: sixh },
  { value: "7h", suit: "hearts", displayValue: "7", image: sevenh },
  { value: "8h", suit: "hearts", displayValue: "8", image: eighth },
  { value: "9h", suit: "hearts", displayValue: "9", image: nineh },
  { value: "Th", suit: "hearts", displayValue: "10", image: tenh },
  { value: "Jh", suit: "hearts", displayValue: "J", image: jackh },
  { value: "Qh", suit: "hearts", displayValue: "Q", image: queenh },
  { value: "Kh", suit: "hearts", displayValue: "K", image: kingh },
  { value: "Ah", suit: "hearts", displayValue: "A", image: aceh },
  { value: "2d", suit: "diamonds", displayValue: "2", image: twod },
  { value: "3d", suit: "diamonds", displayValue: "3", image: threed },
  { value: "4d", suit: "diamonds", displayValue: "4", image: fourd },
  { value: "5d", suit: "diamonds", displayValue: "5", image: fived },
  { value: "6d", suit: "diamonds", displayValue: "6", image: sixd },
  { value: "7d", suit: "diamonds", displayValue: "7", image: sevend },
  { value: "8d", suit: "diamonds", displayValue: "8", image: eightd },
  { value: "9d", suit: "diamonds", displayValue: "9", image: nined },
  { value: "Td", suit: "diamonds", displayValue: "10", image: tend },
  { value: "Jd", suit: "diamonds", displayValue: "J", image: jackd },
  { value: "Qd", suit: "diamonds", displayValue: "Q", image: queend },
  { value: "Kd", suit: "diamonds", displayValue: "K", image: kingd },
  { value: "Ad", suit: "diamonds", displayValue: "A", image: aced },
  { value: "2s", suit: "spades", displayValue: "2", image: twos },
  { value: "3s", suit: "spades", displayValue: "3", image: threes },
  { value: "4s", suit: "spades", displayValue: "4", image: fours },
  { value: "5s", suit: "spades", displayValue: "5", image: fives },
  { value: "6s", suit: "spades", displayValue: "6", image: sixs },
  { value: "7s", suit: "spades", displayValue: "7", image: sevens },
  { value: "8s", suit: "spades", displayValue: "8", image: eights },
  { value: "9s", suit: "spades", displayValue: "9", image: nines },
  { value: "Ts", suit: "spades", displayValue: "10", image: tens },
  { value: "Js", suit: "spades", displayValue: "J", image: jacks },
  { value: "Qs", suit: "spades", displayValue: "Q", image: queens },
  { value: "Ks", suit: "spades", displayValue: "K", image: kings },
  { value: "As", suit: "spades", displayValue: "A", image: aces },
];

export const gameState: GameState = {
  deck: deck,
  players: [],
  table: {
    pot: 0,
    startingChips: 0,
    currentBet: 0,
    smallBlind: 0,
    bigBlind: 0,
    community: [],
    burn: [],
    tableName: "",
    tableCode: "",
    user_id: 0,
    id: 0,
    blindTimer: 0,
  },
  buttonPosition: 1,
  winningHands: [],
  winner: { winners: [], desc: "" },
};

export const userState: UserState = {
  user: { email: "", id: 0, username: "" },
  loading: false,
  error: "",
};
