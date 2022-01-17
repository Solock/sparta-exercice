function theEFilter(sentences) {

  const newSentence = [];

  sentences.forEach(element => {
    if(element.includes("e") || element.includes("E")){
      newSentence.push(element);
    }
  });
  return newSentence;
}

// const sentences = ["Mario", "Luigi", "PEach", "Toad", "Bowser"];

// const resultat = theEFilter(sentences);

// console.log(resultat);

// Do not remove the following line, it is for tests
module.exports = theEFilter;
