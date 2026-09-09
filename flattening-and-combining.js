// concat() -------------------------------------------
console.warn("concat()");
const num = [1, 3];
const str = ["lcfc"];
const bool = true;
const concatNumStrArr = num.concat(str, bool);
console.log(concatNumStrArr);

const defenders = ["steve", "Gary", "Mike"];
const midfielders = ["Muzzy", "Robbie", "Richie"];
const strikers = ["Jamie", "Emile"];
const mixedArray = [
  1,
  4,
  true,
  [1, 3],
  "string",
  { name: "pete", town: "Leicester" },
];

const mergedDefendersAndMidfielders = defenders.concat(midfielders);
const mergedDefenderMidfieldersAndStrikers = defenders.concat(
  midfielders,
  strikers,
);
const mergedDefenderMidfieldersStrikersAndMixedArray = defenders.concat(
  midfielders,
  strikers,
  mixedArray,
);
console.log(mergedDefendersAndMidfielders);
console.log(mergedDefenderMidfieldersAndStrikers);
console.log(mergedDefenderMidfieldersStrikersAndMixedArray);

// You can also concatenate values directly to an array.
const letters = ["a", "b", "c"];
const alphaNumeric = letters.concat(1, [2, 3]);
console.log(alphaNumeric); // ["a", "b", "c", 1, 2, 3]

// flat() --------------------------------------------------------------------------
console.warn("flat()");
const arrayToFlatOne = [1, 2, 3, 4, 5, [6, 7]];
const flatlevelOne = arrayToFlatOne.flat(); //depth 1
console.log("arrayToFlatOne", flatlevelOne);
//
const arrayToFlatTwo = [1, 2, 3, [4, 5, [6, 7]]];
const arrayToFlatTwoLevelOne = arrayToFlatTwo.flat(); //depth 1
const arrayToFlatTwoLevelTwo = arrayToFlatTwo.flat(2); //depth 2
console.log("arrayToFlatTwoLevelOne", arrayToFlatTwoLevelOne);
console.log("arrayToFlatTwoLevelTwo", arrayToFlatTwoLevelTwo);
//
const arrayToFlatThree = [1, 2, 3, [4, 5, [6, 7, [8, 9]]]];
const flatlevelThree = arrayToFlatThree.flat(3); //depth 3
console.log("arrayToFlatThree", flatlevelThree);

// The flat() method removes empty slots in arrays:
const sparseArray = [1, , , 4, , 6, 7];
console.log("sparseArrayEmptySlots[1, , , 4, , 6, 7]", sparseArray.flat()); // Output: [1, 3]

// spread operator ... -----------------------
console.warn("Spread Operator ...");

//Copying an Array

const ArrayToCopy = ["Copy", "Me"];
const copiedArray = [...ArrayToCopy];
console.log("copiedArray", ArrayToCopy);
//Concatenating Arrays

const arrayOne = [1, 2, 3];
const arrayTwo = [4, 5, 6];
const addedArray = [...arrayOne, ...arrayTwo];
console.log("mergedArray", addedArray);
//Using the Spread Operator with Objects---------

//coping an object

const ObjectToCopy = { season: "summer", temperature: "fucking hot" };
const copiedObject = { ...ObjectToCopy };

//Merging Objects
console.log("copiedObject", copiedObject);
const one = { teamone: "leicester", groundone: "filbert street" };
const two = { teamtwo: "Liverpool", groundtwo: "Anfield" };
const oneAndTwo = { ...one, ...two };
console.log("mergedObject", oneAndTwo);

// Here, the spread operator merges obj1 and obj2 into a new object merged. Note that the property b from obj2 overwrites the property b from obj1.
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const merged = { ...obj1, ...obj2 };
console.log(merged); // Output: { a: 1, b: 3, c: 4 }

// Here, the spread operator merges myVehicle and updateMyVehicle into a new object merged. Note that the property color from updateMyVehicle overwrites the property  color from myVehicle.
const myVehicle = {
  brand: "Ford",
  model: "Mustang",
  color: "red",
};

const updateMyVehicle = {
  type: "car",
  year: 2021,
  color: "yellow",
};

const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle };

console.log("myUpdatedVehicle", myUpdatedVehicle);

// Passing Array Elements as Function Arguments
const numbers = [1, 2, 3];
const sum = (a, b, c) => a + b + c;
console.log(sum(...numbers)); // Output: 6
