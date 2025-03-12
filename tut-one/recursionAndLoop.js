// 🔹 1. Recursive Countdown Function
function countdown(n) {
    if (n <= 0) {
        return [];
    } else {
        let arr = countdown(n - 1);
        arr.unshift(n);
        return arr;
    }
}

console.log("Countdown:", countdown(5)); // Output: [5, 4, 3, 2, 1]

// 🔹 2. Looping Through an Array Using For Loop
let numbers = [1, 2, 3, 4, 5];

console.log("For Loop Output:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]); // Output: 1, 2, 3, 4, 5
}

// 🔹 3. Looping Through an Array Using For...of Loop
console.log("For...of Loop Output:");
for (let num of numbers) {
    console.log(num);
}

// 🔹 4. Factorial Using Recursion
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log("Factorial of 5:", factorial(5)); // Output: 120

// 🔹 5. Looping Through an Object Using For...in
let user = {
    name: "Alice",
    age: 25,
    country: "USA"
};

console.log("User Object Properties:");
for (let key in user) {
    console.log(`${key}: ${user[key]}`);
}

// 🔹 6. Recursive Function to Traverse a Nested Object
let nestedObject = {
    data: {
        info: {
            value: 42,
            next: {
                value: 50,
                next: {
                    value: 75
                }
            }
        }
    }
};

function getValues(obj) {
    if (!obj) return [];
    return [obj.value].concat(getValues(obj.next));
}

console.log("Nested Object Values:", getValues(nestedObject.data.info)); 
// Output: [42, 50, 75]

// 8️⃣ Nested `for` Loop - Iterating a 2D Array (Matrix)
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("🔢 2D Array Output:");
for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
        console.log(`Matrix[${row}][${col}] = ${matrix[row][col]}`);
    }
}

// 9️⃣ Nested `for` Loop - Multiplication Table
console.log("📊 Multiplication Table (1-5):");
for (let x = 1; x <= 5; x++) {
    let rowOutput = "";
    for (let y = 1; y <= 5; y++) {
        rowOutput += (x * y) + "\t"; // Tab space for better formatting
    }
    console.log(rowOutput);
}