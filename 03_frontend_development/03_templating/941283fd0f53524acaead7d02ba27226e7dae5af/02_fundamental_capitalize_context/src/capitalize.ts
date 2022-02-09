// Copy your function `capitalize` from the first exercise

export function capitalize(word: string): string {
  const capitalizer: string = word.charAt(0).toUpperCase()+word.slice(1);
  return capitalizer;
  // Code your function here
}
