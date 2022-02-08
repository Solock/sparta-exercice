// Code here
function compare(x: number, y: number): number{
  return x - y;
}

// Pour trier par ordre décroissant,
// on definira autrement la fonction compare :
function compareDes(x:number, y: number): number{
  return y - x;
}

function sortingMachine(array: number[], order: boolean): number[] {
  if (order === true) {
    array.sort(compare);
    return array;
  }
  else {
    array.sort(compareDes);
    return array;
  }
}

const nombres: number[] = [1, 2, 5, 8, 9, 12, 16];

sortingMachine(nombres, true);
console.log(sortingMachine(nombres, false));

