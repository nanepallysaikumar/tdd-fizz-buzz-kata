function generateNumberListByMaxCount(maxCount) {
  const numberList = [];
  for (let count = 1; count <= maxCount; count++) {
    numberList.push(count);
  }
  return numberList;
}

export { generateNumberListByMaxCount };
