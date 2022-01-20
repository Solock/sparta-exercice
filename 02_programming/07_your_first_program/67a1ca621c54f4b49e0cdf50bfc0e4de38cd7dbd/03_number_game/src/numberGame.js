function numberGame(reader, min = 1, max = 100) {
  // code here

  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const mystere = getRandomArbitrary(1, 100);
  console.log(mystere);

  console.log("Bienvenue dans notre jeu!");
  console.log("Trouvez le nombre mystere compris entre 1 et 100!");
  console.log("Bonne Chance!");

  function condition(number){
    if (mystere > number) {
      console.log("Too low");
    } else if (mystere < number) {
      console.log("Too hight");
    }
    else if(mystere === number){
      console.log("You won!");
    }
    else{
      console.log("It's not a number!");
    }
  }

  function

  reader.question("Entrez un nombre svp ", (number) =>{
    condition(number);
    do {
      condition(number)
    } while (condition(number) !== mystere);
    reader.close();
  }
}

module.exports = numberGame;
