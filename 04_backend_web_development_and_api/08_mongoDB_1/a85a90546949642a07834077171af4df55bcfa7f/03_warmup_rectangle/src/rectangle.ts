export function rectangle(width: number, height: number): string {
  let space = "";
  for (let index = 0; index < height; index++) {
    for (let jindex = 0; jindex < width; jindex++) {
      if (jindex === width - 1) {
        space += "*\n";
      } else {
        space += "*";
      }
    }
  }
  return space;
}
