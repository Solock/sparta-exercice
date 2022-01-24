
const readline = require("readline");
//Permet l'utilisation du reader.question

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome to Shifumi's game!\n");
console.log("Enjoy and try to beat Billy!\n");
console.log("You will aske me 'Who is Billy?'.\n");
console.log("Billy is the Shifumi's Champion Universe before the Cosmic Christ B)\n");
console.log("Enjoy the game and good luck!\n");
console.log("Oh! i forgot rules! to choose your sign, use numbers!\n ");
console.log("Rock: 0; Paper: 1; Scissors: 2\n");


//ROCK

const rock = {
  key: 0,
  log: [
    "    ________        ",
    "---'   _ ,  |       ",
    "      (__(__)       ",
    "      (_____)       ",
    "      (____)        ",
    "---.__(___)         ",
  ]
};

//PAPER

const paper = {
  key: 1,
  log: [
    "      _______       ",
    "----'    ____)____  ",
    "            _______)",
    "            _______)",
    "           _______) ",
    "----.__________)    ",
  ]
};

//SCISSORS

const scissors = {
  key: 2,
  log: [
    "    ____           ",
    "---'    |________  ",
    "     (__)________) ",
    "        _________) ",
    "      (____)       ",
    "---.__(___)        ",
  ]
};


function billy (max) {
  let moveBilly = [];
  let proba = Math.round(Math.random() * max);

  moveBilly.push(proba);
  console.log(moveBilly);

  if (proba === rock.key) {
    return rock.log;
  }
  else if(proba === paper.key){
    return paper.log;
  }
  else if(proba === scissors.key){
    return scissors.log;
  }
}

function matchUp () {
  if (billy.call(2) === player.call()) {
    console.log("You win!");
    return player();
  }
}

function player () {

  let movePlayer= [];

  movePlayer.push();

  console.log();
}

reader.question("Please choose a move\n> ", (move) => {

  if (Number(move) === rock.key) {
    console.log("ROCK & STONE BROTHER!", rock.log);
    return ;
  }
  else if (Number(move) === paper.key) {
    console.log("AVATAR ?! ITS YOU ?!", paper.log);
    return ;
  }
  else if (Number(move) === scissors.key) {
    console.log("EDUARD SCISSORSHAND ;-;", scissors.log);
    return ;
  }
  else{
    throw new Error("Enter a number below 0 and 2");
  }
});

// console.log(typeof matchUp());
// console.log(player());
// console.log(billy());

// console.log(billy(2));


