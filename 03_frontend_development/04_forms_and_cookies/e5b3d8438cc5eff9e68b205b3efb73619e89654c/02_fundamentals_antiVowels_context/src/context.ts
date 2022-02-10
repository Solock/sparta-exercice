import { sentenceJoiner } from './sentenceJoiner';
import { sentenceSplitter } from './sentenceSplitter';


export function context(sentence: string): string {
  const sentenceArray = sentenceSplitter(sentence);
  //console.log("sentenceArray",sentenceArray);
  const arrayVowel = sentenceArray.filter(word => (word.charAt(0) === "a" || word.charAt(0) === "e" || word.charAt(0) === "i" || word.charAt(0) === "o" || word.charAt(0) === "u" || word.charAt(0) === "y" || word.charAt(0) === "A" || word.charAt(0) === "E" || word.charAt(0) === "I" || word.charAt(0) === "O" || word.charAt(0) === "U" || word.charAt(0) === "Y") ? false : true);
  //console.log("arrayVowel",arrayVowel);
  const newSentence = sentenceJoiner(arrayVowel);
  //console.log("newSentence",newSentence);
  return newSentence;
  // Code your function for context here
}
