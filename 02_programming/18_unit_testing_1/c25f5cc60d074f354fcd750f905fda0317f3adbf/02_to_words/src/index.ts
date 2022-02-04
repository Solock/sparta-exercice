function toWords(sentence: string): string[] {
  const allWords = sentence.split(/[.!, :-]+/);

  return allWords.filter(word => word !== "");
}

export { toWords };
