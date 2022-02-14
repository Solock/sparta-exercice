import { Draw } from "./types";

function getRandom(min: number, max: number) {
  return Math.floor(Math.random() * (max + 1 - min));
}
export function lottery_draw(): Draw {
  const numbersArray: Draw = [];
  for (let i = 0; i < 3; i++) {
    numbersArray.push(getRandom(0, 3));
  }
  return numbersArray;
}
