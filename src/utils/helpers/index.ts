import { Card, Player, GameActions, Winner } from "../../types";
import { Hand } from "pokersolver";
import { FINAL_HAND, WINNER } from "../../state/actions/gameActions";

export async function setFinalHands(
  players: Player[],
  community: Card[],
  dispatch: (type: GameActions) => {}
) {
  const handArray: string[] = [];
  const communityValue = community.map((item) => item.value);
  const newPlayerList: Player[] = [];
  players.forEach(async (item) => {
    const handValue = item.currentHand.map((item) => item.value);
    const hand = await Hand.solve(communityValue.concat(handValue));
    newPlayerList.push({ ...item, finalHand: hand.cards });
    handArray.push(hand);
  });
  dispatch({ type: FINAL_HAND, payload: newPlayerList });
  return { handArray, newPlayerList };
}

export const setWinningHand = async (playerHands: {}) => {
  const winningHand = await Hand.winners(playerHands);
  return winningHand;
};

export const findWinners = async (winningHands: [], players: Player[]) => {
  const winners: Player[] = [];
  players.forEach((item: Player) => {
    winningHands.forEach((hand: { cards: {} }) => {
      if (JSON.stringify(item.finalHand) === JSON.stringify(hand.cards)) {
        winners.push(item);
      }
    });
  });
  return winners;
};
export const analizeHands = async (
  players: Player[],
  community: Card[],
  dispatch: (type: GameActions) => {}
) => {
  const results: Winner = { winners: [], desc: "" };
  await setFinalHands(players, community, dispatch).then(async (res) => {
    await setWinningHand(res.handArray).then(async (res2) => {
      results.desc = res2[0].descr;
      await findWinners(res2, res.newPlayerList).then((res3) => {
        results.winners = res3;
      });
    });
  });
  dispatch({ type: WINNER, payload: results });
  return results;
};

export const shuffle = (arry: Card[]) => {
  let newArray = arry
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
  newArray.forEach((a) => {
    newArray = newArray
      .map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value);
  });
  return newArray;
};

export const tableCode = async () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let code = "";
  for (let i = 0; i < 4; i++) {
    const letter = Math.floor(Math.random() * letters.length);
    code = code + letters[letter];
  }
  return code;
};
