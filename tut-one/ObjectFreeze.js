/*1. Preventing Object Mutation (Object.freeze)
By default, objects in JavaScript are mutable, meaning their properties can be modified. To prevent changes, we use Object.freeze().
*/
let person = {
    name: "John",
    age: 25
};

Object.freeze(person);

person.age = 30; // ❌ This change won't work
person.city = "New York"; // ❌ New properties can't be added

console.log(person); // Output: { name: "John", age: 25 }

// Regular function
function greet(name) {
    return "Hello, " + name;
}

// Arrow function
const greetArrow = name => `Hello, ${name}`;

console.log(greet("Alice")); // "Hello, Alice"
console.log(greetArrow("Bob")); // "Hello, Bob"
