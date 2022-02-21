import { getRandomFace } from "./random-face";

function headOrTail(tirage: string): Promise<string> {
  const randomTirage = getRandomFace();
  return new Promise((resolve, reject) => {
    if (randomTirage === tirage) {
      resolve("Well done.");
    } else {
      reject("Nope.");
    }
  });
}

export { headOrTail };
