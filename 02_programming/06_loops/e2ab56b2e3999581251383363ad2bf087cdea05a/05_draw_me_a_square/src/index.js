function square(sizeSquare) {

  let star = "";

  for (let index = 0; index < sizeSquare; index++) {
    star += "*";
  }

  for (let index = 0; index < sizeSquare; index++) {
    console.log(star);
  }

  // Code here
}

// Do not remove the following line, it is for tests
module.exports = square;
