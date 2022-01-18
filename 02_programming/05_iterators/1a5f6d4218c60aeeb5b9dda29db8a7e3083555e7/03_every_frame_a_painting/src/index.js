function canTakeArtPieces(pieces) {

  return pieces.every((artPiece) => artPiece.type === "painting");

}



// Do not remove the following line, it is for tests
module.exports = canTakeArtPieces;
