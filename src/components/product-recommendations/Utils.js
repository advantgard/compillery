export const chunkArray = (array, chunks) => {
  let results = [];

  while (array.length) {
    results.push(array.splice(0, chunks));
  }

  return results;
};

export const deleteObjectFromArrayById = (array, id) =>
  array.splice(array.findIndex(item => item.id === id), 1);

export const moveObjectFromArrayUp = (array, id) => {
  const objectIndex = array.findIndex(currentObject => currentObject.id === id);
  if (objectIndex > 0) {
    const temp = array[objectIndex - 1];
    array[objectIndex - 1] = array[objectIndex];
    array[objectIndex] = temp;
  }
};

export const concatObjectArrays = (array1, array2) => {
  if (!array1.length) return array2;
  if (!array2.length) return array1;

  array2.forEach( item => {
    const index = array1.findIndex(nestedItem => item.id === nestedItem.id);
    if (index === -1) array1.push(item);
  });

  return array1;
};

export const colorHSL = color => {
  return `hsl(${color.hue},${color.saturation * 100}%,${color.brightness *
    100}%)`;
};
