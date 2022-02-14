import { lottery_draw } from "./lottery_draw"
import { Draw } from "./types";

export function checkIfIWon(ticket: Draw): void {
  const lotteryArray = lottery_draw();

  if(ticket.join("") !== lotteryArray.join("")){
    console.log("You lost...");
  }
  else {
    console.log("You won the lottery!");
  }
  // Code the function here
}
