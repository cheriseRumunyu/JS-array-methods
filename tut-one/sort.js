//Sorts elements (modifies original)
// Sample array of numbers
const numbers = [5, 2, 8, 1, 4];

// 1️⃣ Ascending Order (Small to Large)
const ascending = [...numbers].sort((a, b) => a - b);
console.log("Ascending Order:", ascending);
// Output: [1, 2, 4, 5, 8]

// 2️⃣ Descending Order (Large to Small)
const descending = [...numbers].sort((a, b) => b - a);
console.log("Descending Order:", descending);
// Output: [8, 5, 4, 2, 1]

// 3️⃣ Sorting Strings Alphabetically
const words = ["Banana", "Apple", "Orange", "Mango"];
const sortedWords = [...words].sort();
console.log("Alphabetical Order:", sortedWords);
// Output: ["Apple", "Banana", "Mango", "Orange"]

// 4️⃣ Sorting Strings in Reverse Alphabetical Order
const reverseAlphabetical = [...words].sort().reverse();
console.log("Reverse Alphabetical Order:", reverseAlphabetical);
// Output: ["Orange", "Mango", "Banana", "Apple"]

// 5️⃣ Sorting Objects by Numeric Property
const students = [
  { name: "Alice", age: 24 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 27 }
];

const sortedByAge = [...students].sort((a, b) => a.age - b.age);
console.log("Sorted by Age:", sortedByAge);
/*
Output:
[
  { name: 'Bob', age: 22 },
  { name: 'Alice', age: 24 },
  { name: 'Charlie', age: 27 }
]
*/

// 6️⃣ Sorting Objects by String Property
const sortedByName = [...students].sort((a, b) => a.name.localeCompare(b.name));
console.log("Sorted by Name:", sortedByName);
/*
Output:
[
  { name: 'Alice', age: 24 },
  { name: 'Bob', age: 22 },
  { name: 'Charlie', age: 27 }
]
*/

// 7️⃣ Sorting Mixed Case Strings (Case-Insensitive)
const mixedCaseWords = ["banana", "Apple", "orange", "Mango"];
const caseInsensitiveSort = [...mixedCaseWords].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log("Case-Insensitive Sort:", caseInsensitiveSort);
// Output: ["Apple", "banana", "Mango", "orange"]

// 8️⃣ Randomizing (Shuffling) an Array
const shuffled = [...numbers].sort(() => Math.random() - 0.5);
console.log("Shuffled Numbers:", shuffled);
// Output: [Randomized Order]
