//  reduce --------------------------------------------------------------------------------------
const reduceOriginalArrayParagraph = document.getElementById(
  "reduce-original-array",
);
const reduceParagraph = document.getElementById("reduce-array");
const arrayToReduce = [1, 1888, 3, 4, 5, 6, 33, 22];

reduceOriginalArrayParagraph.textContent = `Original Array: ${arrayToReduce}`;
/* In this example, the reduce() method sums up all the numbers in the array. The initial value of the accumulator is set to 0.*/
const numbersReduced = arrayToReduce.reduce(
  (accumulator, CurrentValue) => accumulator + CurrentValue,
  0,
);

reduceParagraph.textContent = `Reduced Array: ${numbersReduced}`;

// forEach --------------------------------------------------------------------------------

const users = ["Alice", "Bob", "Charlie"];
users.forEach((user) => {
  console.log(`Sending welcome email to ${user}`);
});

const forEachDiv = document.getElementById("for-each-div");

const arrayToForEach = [
  { team: "Leicester", ground: "Filbert Street" },
  { team: "Leicester", ground: "Belvoir Drive" },
  { team: "Barcelona", ground: "Nou Camp" },
  { team: "Barcelona ladies", ground: "Nou Camp" },
  { team: "AC Milan", ground: "San Siro" },
];

arrayToForEach.forEach((item) => {
  const heading = document.createElement("h3");
  const paragraph = document.createElement("p");
  const LineBreak = document.createElement("br");
  heading.textContent = item.team;
  paragraph.textContent = item.ground;
  forEachDiv.appendChild(heading);
  forEachDiv.appendChild(paragraph);
});

const forEachOriginalArrayParagraph = document.getElementById(
  "for-each-original-array",
);

const forEachArray = [1888, 2001, 11];
const forEachSecondArray = document.getElementById(
  "for-each-original-second-array",
);
forEachSecondArray.textContent = forEachArray;
const forEachSecondDiv = document.getElementById("for-each-second-div");
forEachArray.forEach((number, index, array) => {
  const paragraphNumber = document.createElement("p");
  const paragraphIndex = document.createElement("p");
  const paragraphArray = document.createElement("p");
  paragraphNumber.innerHTML = `&nbsp; &nbsp; number: ${number}&nbsp;&nbsp;`;
  paragraphIndex.innerHTML = `index: ${index}&nbsp;&nbsp;`;
  paragraphArray.innerHTML = `array: ${array}&nbsp;&nbsp;`;

  forEachSecondDiv.appendChild(paragraphNumber);
  forEachSecondDiv.appendChild(paragraphIndex);
  forEachSecondDiv.appendChild(paragraphArray);
});

// Map -------------------------------------------------------------------------------------

const mapOriginalArrayParagraph = document.getElementById("map-original-array");
const mapParagraph = document.getElementById("map-array");
const arrayToMap = [33, 40, 5, 7, 66, 2];
mapOriginalArrayParagraph.textContent = `Original Array: ${arrayToMap}`;
const numbersMapped = arrayToMap.map((number) => number * 3);
mapParagraph.textContent = `Mapped Array * 3: ${numbersMapped}`;
const test = arrayToMap.map((num) => num % 2 == 0);

// Filter --------------------------------------------------------------------------------------

const filterOriginalArrayParagraph = document.getElementById(
  "filter-original-array",
);
const filterParagraph = document.getElementById("filter-array");
const filteredStringParagraph = document.getElementById(
  "filtered-string-array",
);
const filteredEvenNumbersParagraph = document.getElementById(
  "filtered-even-numbers",
);
const filteredOddNumbersParagraph = document.getElementById(
  "filtered-odd-numbers",
);

const arrayTofilter = [33, 55, 5, 7, 66, 2, "leicester", "foxes"];

filterOriginalArrayParagraph.textContent = `Original Array: ${arrayTofilter}`;
const filterArrayEquals = arrayTofilter.filter((number) => number == 7);
const filterArrayDoesNotEquals = arrayTofilter.filter((number) => number != 7);
const stringFiltered = arrayTofilter.filter((item) => typeof item == "string");
const filteredEvenNumbers = arrayTofilter.filter((item) => item % 2 == 0);
const filteredOddNumbers = arrayTofilter.filter((item) => item % 2 != 0);
// a for loop to find even numbers
for (let i = 0; i < arrayToMap.length; i++) {
  if (arrayToMap[i] % 2 == 0) {
    console.log(arrayToMap[i]);
  }
}

filterParagraph.innerHTML = `Filtered Array equals 7: ${filterArrayEquals}<br> Filtered Array does not equals 7: ${filterArrayDoesNotEquals}`;
filteredStringParagraph.textContent = `Filtered String Array: ${stringFiltered}`;
filteredEvenNumbersParagraph.textContent = `Filtered even numbers: ${filteredEvenNumbers}`;
filteredOddNumbersParagraph.textContent = `Filtered odd numbers and not even numbers as there are strings(leicester and foxes): ${filteredOddNumbers}`;

// using forEach() and Filter() --------------------------------------------------
const forEachAndFilterDiv = document.getElementById("for-each-and-filter-div");
const forEachAndFilterSecondDiv = document.getElementById(
  "for-each-and-filter-second-div",
);
arrayToForEach
  .filter((item) => item.team == "Leicester")
  .forEach((item) => {
    const heading = document.createElement("h3");
    const paragraph = document.createElement("p");
    heading.textContent = item.team;
    paragraph.textContent = item.ground;
    forEachAndFilterDiv.appendChild(heading);
    forEachAndFilterDiv.appendChild(paragraph);
  });

arrayToForEach
  .filter((item) => item.ground == "Nou Camp")
  .forEach((item) => {
    const heading = document.createElement("h3");
    const paragraph = document.createElement("p");
    heading.textContent = item.team;
    paragraph.textContent = item.ground;
    forEachAndFilterSecondDiv.appendChild(heading);
    forEachAndFilterSecondDiv.appendChild(paragraph);
  });
