// 📌 JavaScript Set Example
console.log("=== Set Example ===");

// Creating a Set
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(2); // Duplicate ignored

console.log(mySet); // Set {1, 2, 3}
console.log("Has 2:", mySet.has(2)); // true
console.log("Size of Set:", mySet.size); // 3

// Iterating through Set
console.log("Iterating through Set:");
mySet.forEach(value => console.log(value));

// Deleting an element
mySet.delete(2);
console.log("After deleting 2:", mySet); // Set {1, 3}

// Clearing all elements
mySet.clear();
console.log("After clearing:", mySet); // Set {}

console.log("\n=== WeakSet Example ===");

// 📌 JavaScript WeakSet Example
const weakSet = new WeakSet();

let obj1 = { name: "Alice" };
let obj2 = { name: "Bob" };

weakSet.add(obj1);
weakSet.add(obj2);
console.log("WeakSet has obj1:", weakSet.has(obj1)); // true

// Deleting an object
weakSet.delete(obj2);
console.log("WeakSet has obj2 after deletion:", weakSet.has(obj2)); // false

// Garbage Collection Behavior
let obj3 = { name: "Charlie" };
weakSet.add(obj3);
console.log("WeakSet has obj3:", weakSet.has(obj3)); // true

obj3 = null; // Now, obj3 will be garbage collected

// Trying to iterate over WeakSet (which is not allowed)
// for (let item of weakSet) {
//     console.log(item); // ❌ TypeError: weakSet is not iterable
// }

console.log("WeakSet does not support iteration or size checking.");
