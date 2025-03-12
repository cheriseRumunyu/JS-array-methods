//	Combines elements into a single value
// Sample array of numbers
const numbers = [1, 2, 3, 4, 5];

// 1️⃣ Sum of all numbers
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of numbers:", sum);
// Output: 15

// 2️⃣ Multiply all numbers (product)
const product = numbers.reduce((acc, num) => acc * num, 1);
console.log("Product of numbers:", product);
// Output: 120

// 3️⃣ Find the maximum value
const maxNumber = numbers.reduce((max, num) => (num > max ? num : max), numbers[0]);
console.log("Maximum number:", maxNumber);
// Output: 5

// 4️⃣ Find the minimum value
const minNumber = numbers.reduce((min, num) => (num < min ? num : min), numbers[0]);
console.log("Minimum number:", minNumber);
// Output: 1

// 5️⃣ Count occurrences of elements in an array
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const fruitCount = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log("Fruit count:", fruitCount);
/*
Output:
{
  apple: 3,
  banana: 2,
  orange: 1
}
*/

// 6️⃣ Flatten an array of arrays
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flattenedArray = nestedArray.reduce((acc, arr) => acc.concat(arr), []);
console.log("Flattened array:", flattenedArray);
// Output: [1, 2, 3, 4, 5, 6]

// 7️⃣ Sum of object property values (Total Price)
const cart = [
  { item: "Laptop", price: 800 },
  { item: "Phone", price: 500 },
  { item: "Tablet", price: 300 }
];

const totalPrice = cart.reduce((total, product) => total + product.price, 0);
console.log("Total Price of Cart:", totalPrice);
// Output: 1600
