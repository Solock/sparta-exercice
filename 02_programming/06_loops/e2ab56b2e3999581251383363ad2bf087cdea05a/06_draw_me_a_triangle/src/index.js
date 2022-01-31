function triangle(sizeTriangle) {

  let star = "";

  for (let index = 1; index <= sizeTriangle; index++) {
    for (let jindex = 1; jindex < sizeTriangle - index; jindex++) {
      star += " ";
    }

    for (let pindex = 0; pindex < 2 * index - 1; pindex++) {
      star += "*";
    }
    star += "\n";
  }
  console.log(star);
  // Code here

}

triangle(8);

// Do not remove the following line, it is for tests
module.exports = triangle;
