type Draw = number[]

function getRandom(min: number, max: number) {
  return Math.floor(Math.random() * (max + 1 - min));
}
export function lottery_draw(): Draw {
  const numbersArray: Draw = [];
  for (let i = 0; i < 6; i++) {
    numbersArray.push(getRandom(0, 100));
  }
  return numbersArray;
}
