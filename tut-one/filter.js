//Creates a new array containing only the elements that pass a test (callback function).
// Sample array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1️⃣ Filter numbers greater than 5
const greaterThanFive = numbers.filter(num => num > 5);
console.log("Numbers greater than 5:", greaterThanFive); 
// Output: [6, 7, 8, 9, 10]

// 2️⃣ Filter even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers); 
// Output: [2, 4, 6, 8, 10]

// 3️⃣ Filter odd numbers
const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log("Odd numbers:", oddNumbers); 
// Output: [1, 3, 5, 7, 9]

// 4️⃣ Filter students who passed (marks > 50)
const students = [
  { name: "Alice", marks: 45 },
  { name: "Bob", marks: 80 },
  { name: "Charlie", marks: 60 },
  { name: "David", marks: 50 }
];

const passedStudents = students.filter(student => student.marks > 50);
console.log("Students who passed:", passedStudents);
/*
Output:
[
  { name: "Bob", marks: 80 },
  { name: "Charlie", marks: 60 }
]
*/

// 5️⃣ Filter strings that contain the letter "a"
const words = ["apple", "banana", "cherry", "date", "fig"];
const wordsWithA = words.filter(word => word.includes("a"));
console.log("Words containing 'a':", wordsWithA);
// Output: ["apple", "banana", "date"]

// 6️⃣ Filter objects based on a condition (active users)
const users = [
  { id: 1, name: "John", active: true },
  { id: 2, name: "Jane", active: false },
  { id: 3, name: "Mike", active: true }
];

const activeUsers = users.filter(user => user.active);
console.log("Active users:", activeUsers);
/*
Output:
[
  { id: 1, name: "John", active: true },
  { id: 3, name: "Mike", active: true }
]
*/
