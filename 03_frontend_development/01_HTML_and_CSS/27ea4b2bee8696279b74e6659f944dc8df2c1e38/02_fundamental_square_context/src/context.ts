import {squareNumber} from "./squareNumber"

export function context(arrayOfNumbers: number[]): number[] {
  let newArray: number[] = [];

  newArray = arrayOfNumbers.map(element => squareNumber(element))

  return newArray;
  // Code the function here
}
