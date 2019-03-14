import { Recommendation } from "../Recommendation";

describe("Recommendation", () => {
  test("Should add a recommendation if current recommendation is empty", () => {
    const sampleProps = {
      selectedTiles: [],
      active: null,
      recommendation: null
    };

    const newTile = {
      id: 11,
      label: "Recommends 1",
      recommendation: {
        id: 1,
        weight: 100
      }
    };

    const props = Recommendation(sampleProps, newTile);

    expect(props.recommendation).toBeTruthy();
  });

  test("Should remove the new tile from the tile array if it already exists", () => {
    const sampleProps = {
      selectedTiles: [
        {
          id: 11,
          label: "Recommends 1",
          recommendation: {
            id: 1,
            weight: 100
          }
        }
      ],
      active: 1,
      recommendation: {
        id: 1,
        weight: 100
      }
    };

    const newTile = {
      id: 11,
      label: "Recommends 3",
      recommendation: {
        id: 1,
        weight: 100
      }
    };

    const props = Recommendation(sampleProps, newTile);

    expect(props.selectedTiles.length).toBe(0);
  });

  test("Should clear the recommendation when there are not selectedTiles selected", () => {
    const sampleProps = {
      selectedTiles: [
        {
          id: 11,
          label: "Recommends 1",
          recommendation: {
            id: 1,
            weight: 100
          }
        }
      ],
      active: 1,
      recommendation: {
        id: 1,
        weight: 100
      }
    };

    const newTile = {
      id: 11,
      label: "Recommends 3",
      recommendation: {
        id: 1,
        weight: 100
      }
    };

    const props = Recommendation(sampleProps, newTile);

    expect(props.selectedTiles.length).toBe(0);
    expect(props.recommendation).toBeNull();
  });

  test("Should replace current recommendation if the user selects a recommendation with greater weight", () => {
    const sampleProps = {
      selectedTiles: [
        {
          id: 11,
          label: "Recommends 1",
          recommendation: {
            id: 1,
            weight: 100
          }
        },
        {
          id: 22,
          label: "Recommends 2",
          recommendation: {
            id: 2,
            weight: 200
          }
        }
      ],
      active: 2,
      recommendation: {
        id: 2,
        weight: 200
      }
    };

    const newTile = {
      id: 33,
      label: "Recommends 3",
      recommendation: {
        id: 3,
        weight: 300
      }
    };

    const props = Recommendation(sampleProps, newTile);

    expect(props.recommendation.id).toBe(3);
  });

  test("Should not replace the recommendation if the user selects a recommendation with lesser weight", () => {
    const sampleProps = {
      selectedTiles: [
        {
          id: 22,
          label: "Recommends 2",
          recommendation: {
            id: 2,
            weight: 200
          }
        },
        {
          id: 33,
          label: "Recommends 3",
          recommendation: {
            id: 3,
            weight: 300
          }
        }
      ],
      active: 3,
      recommendation: {
        id: 3,
        weight: 300
      }
    };

    const newTile = {
      id: 1,
      label: "Recommends 1",
      recommendation: {
        id: 1,
        weight: 100
      }
    };

    const props = Recommendation(sampleProps, newTile);

    expect(props.recommendation.id).toBe(3);
  });

  test("Should update the recommendation to the next higher weight recommendation when a tile is unselected", () => {
    const sampleProps = {
      selectedTiles: [
        {
          id: 22,
          label: "Recommends 2",
          recommendation: {
            id: 2,
            weight: 200
          }
        },
        {
          id: 33,
          label: "Recommends 3",
          recommendation: {
            id: 3,
            weight: 300
          }
        }
      ],
      active: 3,
      recommendation: {
        id: 3,
        weight: 300
      }
    };

    const newTile = {
      id: 33,
      label: "Recommends 1",
      recommendation: {
        id: 3,
        weight: 300
      }
    };

    const props = Recommendation(sampleProps, newTile);

    expect(props.recommendation.id).toBe(2);
  });
});
