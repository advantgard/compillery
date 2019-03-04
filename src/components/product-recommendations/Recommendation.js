export const Recommendation = (
  { selectedTiles, recommendation, active },
  newSelectedTile
) => {
  const tileIndex = selectedTiles
    .map(current => current.id)
    .indexOf(newSelectedTile.id);

  if (tileIndex >= 0) {
    selectedTiles.splice(tileIndex, 1);

    if (selectedTiles.length && recommendation) {
      let higherWeight = 0;

      selectedTiles.map(current => {
        if (current.recommendation.weight > higherWeight) {
          higherWeight = current.recommendation.weight;
          recommendation = current.recommendation;
        }
      });

      active = recommendation.id;
    } else {
      recommendation = null;
      active = null;
    }
  } else {
    selectedTiles.push(newSelectedTile);

    if (recommendation) {
      if (newSelectedTile.recommendation.weight > recommendation.weight) {
        recommendation = newSelectedTile.recommendation;
        active = recommendation.id;
      }
    } else {
      recommendation = newSelectedTile.recommendation;
      active = recommendation.id;
    }
  }

  return { selectedTiles, recommendation, active };
};
