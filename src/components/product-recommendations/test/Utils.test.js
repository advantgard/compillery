import { concatObjectArrays } from "../Utils";

describe("concatObjectArrays", () => {
  test("Should concatenate the two arrays of objects without duplicating ones with same id", () => {
    const array1 = [{ id: 1, name: "Potato" }, { id: 2, name: "Potatoes" }];
    const array2 = [{ id: 1, name: "Potato" }, { id: 3, name: "Potatoes" }];
    const expectedResult = [
      { id: 1, name: "Potato" },
      { id: 2, name: "Potatoes" },
      { id: 3, name: "Potatoes" }
    ];

    const result = concatObjectArrays(array1, array2);
    expect(result).toEqual(expectedResult);
  });
  test("Should return the second array as a result if the first array is empty", () => {
    const array1 = [];
    const array2 = [{ id: 1, name: "Potato" }, { id: 3, name: "Potatoes" }];

    const result = concatObjectArrays(array1, array2);
    expect(result).toEqual(array2);
  });
});
