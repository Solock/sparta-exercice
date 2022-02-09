import { capitalize } from "./capitalize"

export function context(sentence: string): string {
  const phraseArray: string[] = sentence.split(" ");
  //console.log(phraseArray);

  const stock: string [] =  phraseArray.map(capitalize);
  const phrase: string = stock.join(" ");

  return phrase;
  // Code here and use the function `capitalize` from exercise one
}

