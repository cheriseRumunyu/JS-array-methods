function getRandomNumber(type, max = 10, denominator = 10) {
    if (type === "whole") {
        return Math.floor(Math.random() * max);
    } else if (type === "fraction") {
        return Math.floor(Math.random() * denominator) / denominator;
    } else {
        return "Invalid type! Use 'whole' or 'fraction'.";
    }
}

console.log(getRandomNumber("whole", 100)); // Random whole number from 0 to 99
console.log(getRandomNumber("fraction", 10, 10)); // Random fraction like 0.1, 0.2, ..., 0.9

//The parseInt function in JavaScript converts a string into an integer.
console.log(parseInt("42")); // Output: 42

//Using parseInt with a Radix (Base):
console.log(parseInt("A", 16)); // Output: 10 (Hexadecimal to Decimal)

//Ternary Operator (? :) in JavaScript
//condition ? expression_if_true : expression_if_false;
function getRandomNumber(type, max = 100) {
  return type === "whole"
    ? parseInt(Math.random() * max)
    : Math.random().toFixed(2);
}

// Example Usage
let age = 18;
let canVote = age >= 18 ? "Yes" : "No";

let num = getRandomNumber("whole", 10);
let parity = num % 2 === 0 ? "Even" : "Odd";

let score = getRandomNumber("whole", 100);
let grade = score >= 90 ? "A" : score >= 75 ? "B" : "C";

console.log(`Can Vote: ${canVote}`);
console.log(`Random Whole Number: ${num}, Parity: ${parity}`);
console.log(`Random Score: ${score}, Grade: ${grade}`);
console.log(`Random Fraction: ${getRandomNumber("fraction")}`);
