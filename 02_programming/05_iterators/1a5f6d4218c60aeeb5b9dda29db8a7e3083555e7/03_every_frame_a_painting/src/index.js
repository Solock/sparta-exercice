function canTakeArtPieces(pieces) {

  if(Object.keys(pieces).
    filter((type) => type.includes("painting") !== true )){
    return false;
  }
  else{
    return true;
  }
}

const art = {piece: "Mona Lisa", type: "painting"};

const resultat = canTakeArtPieces(art);



// Do not remove the following line, it is for tests
module.exports = canTakeArtPieces;
