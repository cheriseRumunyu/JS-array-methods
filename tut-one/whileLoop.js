// 1. Password Prompt (Max 3 Attempts)
let correctPassword = "secure123";
let inputPassword = "";
let attempts = 0;
let maxAttempts = 3;

while (inputPassword !== correctPassword && attempts < maxAttempts) {
    inputPassword = prompt("Enter your password:");
    attempts++;
    
    if (inputPassword === correctPassword) {
        console.log("✅ Access granted!");
    } else if (attempts === maxAttempts) {
        console.log("❌ Too many attempts. Access denied!");
        break;
    } else {
        console.log("⚠ Incorrect password. Try again.");
    }
}

// 2. Find the First Prime Number After a User Input
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

let start = parseInt(prompt("Enter a number to find the next prime:"));
while (!isPrime(start)) {
    start++;  // Keep incrementing until we find a prime number
}
console.log("🔢 First prime number found:", start);

// 3. Random Number Generator (Finds 7)
let randomNumber = 0;
while (randomNumber !== 7) {
    randomNumber = Math.floor(Math.random() * 10) + 1; // Random number 1-10
    console.log("🎲 Generated number:", randomNumber);
}
console.log("🎉 Lucky number 7 found!");

// 4. Countdown Timer
let countdown = parseInt(prompt("Enter a number to start the countdown:"));
while (countdown > 0) {
    console.log("⏳ Countdown:", countdown);
    countdown--;
}
console.log("🚀 Blast Off!");

// 5. Task Completion System
let tasks = ["Wash dishes", "Clean room", "Do homework"];
while (tasks.length > 0) {
    console.log("✅ Task completed:", tasks.shift()); // Removes the first task
}
console.log("🏁 All tasks done!");

// 6️⃣ Iterate Through an Array (Check Even and Odd Numbers)
let numbers = [3, 7, 12, 18, 25, 30, 41];
let index = 0;

while (index < numbers.length) {
    let num = numbers[index];
    if (num % 2 === 0) {
        console.log(`🔵 ${num} is even.`);
    } else {
        console.log(`🔴 ${num} is odd.`);
    }
    index++;
}

// 7️⃣ Iterate Through an Object (User Information)
let user = {
    name: "Alice",
    age: 25,
    city: "New York",
    occupation: "Software Engineer",
};

let keys = Object.keys(user);
let i = 0;

while (i < keys.length) {
    let key = keys[i];
    console.log(`📌 ${key}: ${user[key]}`);
    i++;
}