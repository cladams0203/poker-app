import { Card } from "../types";

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
