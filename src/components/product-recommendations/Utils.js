export const chunkArray = (array, chunks) => {
  let results = [];

  while (array.length) {
    results.push(array.splice(0, chunks));
  }

  return results;
};

export const deleteObjectFromArrayById = (array, id) =>
  array.splice(array.findIndex(item => item.id === id), 1);

export const colorHSL = color => {
  return `hsl(${color.hue},${color.saturation * 100}%,${color.brightness *
    100}%)`;
};
