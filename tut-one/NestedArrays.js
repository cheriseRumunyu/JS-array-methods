// 🔹 List (array) nested inside another array
let nestedArray = [
    [1, 2, 3],
    ["apple", "banana", "cherry"],
    [true, false, true]
];

console.log("Nested Array:", nestedArray);
console.log("Access Element:", nestedArray[1][2]); // Output: cherry

// 🔹 List (array) nested inside an object
let person = {
    name: "John",
    age: 30,
    hobbies: ["reading", "gaming", "cycling"], // List inside an object
    address: {
        city: "New York",
        zip: "10001",
        coordinates: [40.7128, -74.0060] // Another nested list
    }
};

console.log("Person Object:", person);
console.log("Hobbies:", person.hobbies); // Output: ["reading", "gaming", "cycling"]
console.log("First Hobby:", person.hobbies[0]); // Output: reading
console.log("City Coordinates:", person.address.coordinates); // Output: [40.7128, -74.0060]

console.log("second");

