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
  const objectIndex = array.findIndex(
      currentObject => currentObject.id === id
  );
  if (objectIndex > 0) {
    const temp = array[objectIndex - 1];
    array[objectIndex - 1] = array[objectIndex];
    array[objectIndex] = temp;
  }
};

export const colorHSL = color => {
  return `hsl(${color.hue},${color.saturation * 100}%,${color.brightness *
    100}%)`;
};
