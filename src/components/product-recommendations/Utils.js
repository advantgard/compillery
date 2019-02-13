export const chunkArray = (array, chunks) => {
  let results = [];

  while (array.length) {
    results.push(array.splice(0, chunks));
  }

  return results;
};
