type Profile = {
  name: string;
  age: number;
  country: string;
  haveTraveled: boolean;
};

export function assembleData(listName: string[], listAge: number[], listCountry: string[], listAnswer: boolean[]): Profile[] {
  const dataArray = [];
  for (let index = 0; index < listName.length; index++) {
    dataArray.push({ name: listName[index], age: listAge[index], country: listCountry[index], haveTraveled: listAnswer[index] })
  }
  return dataArray;
  // Code here
}
