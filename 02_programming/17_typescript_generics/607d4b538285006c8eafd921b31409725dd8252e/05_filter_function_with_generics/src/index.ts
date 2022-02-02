function filterFor<ArrayElementVelue, ResultElementType>(array: ArrayElementVelue[], predicate: (element: ArrayElementVelue) => ResultElementType): ResultElementType[] {
  const resultArray = [];

  for (const element of array) {
    if (predicate(element)) {
      resultArray.push(element)
    }
  }

  return resultArray;
}

export { filterFor }
