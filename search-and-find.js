// includes()

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.includes("Mango"); // is true

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.includes(2)); // is true

// indexOf()
const fruitsTwo = ["Banana", "Orange", "Apple", "Mango", "Apple", "Pear"];
let index = fruitsTwo.indexOf("Apple");

document.getElementById("demo").innerHTML =
  `The index of the first Apple is: ${index}`;
// indexLastOf()
let lastIndex = fruitsTwo.lastIndexOf("Apple");
document.getElementById("demo-two").innerHTML =
  `The index of the last Apple is: ${lastIndex}`;

// find()
const ages = [3, 10, 18, 21, 22, 20, 43, 22];
const checkAge = (age) => age > 18 && age < 24;
console.log(ages.find(checkAge)); // Output: 20

const findNumbers = [1, 25, 22, 23, 3, 77, 56, 2, 66];

function findNumber(value, index, array) {
  return value > 22;
}

let foundNumber = findNumbers.find(findNumber);

console.log("foundNumber", foundNumber);

const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

const result = inventory.find(({ name }) => name === "cherries");
console.log(result); // Output: { name: 'cherries', quantity: 5 }
// findLast()  ------------------------------------------------

// const findLastNNumbers = [5, 12, 50, 130, 44];
// const lastLarge = findLastNNumbers.findLast(num => num > 45);
// console.log(lastLarge); // Output: 130

const numbersArray = [1, 44, 2, 76, 55, 4337, 2445, 33, 22, 5];

const findLastNumber = numbersArray.findLast((num) => num > 2445);
console.log("findLastNumber", findLastNumber);
