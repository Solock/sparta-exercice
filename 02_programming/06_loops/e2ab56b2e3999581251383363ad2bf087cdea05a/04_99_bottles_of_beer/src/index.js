function sing () {

  const songLyrics = [];

  for (let i = 99; i >= 0; i--) {

    if (i === 2) {
      songLyrics.push("2 bottles of beer on the wall, 2 bottles of beer.");
      songLyrics.push("Take one down and pass it around, 1 bottle of beer on the wall.");
    }
    else if (i === 1) {
      songLyrics.push("1 bottle of beer on the wall, 1 bottle of beer.");
      songLyrics.push("Take one down and pass it around, no more bottles of beer on the wall.");
    }
    else if (i === 0) {
      songLyrics.push("No more bottles of beer on the wall, no more bottles of beer.");
      songLyrics.push("Go to the store and buy some more, 99 bottles of beer on the wall.");

    }
    else{
      songLyrics.push(`${i} bottles of beer on the wall, ${i} bottles of beer.`);
      songLyrics.push(`Take one down and pass it around, ${i - 1} bottles of beer on the wall.`);
    }
  }

  return songLyrics;

  // code here
}

const song = sing();
console.log(song);
// Do not remove the following line, it is for tests
module.exports = sing;
