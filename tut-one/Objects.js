// Defining an object
var myDog = {
    "name": "Charlie",
    "legs": 4,
    "tails": 1,
    "friends": ["Humans", "Other dogs"]
};

// Accessing object properties using dot notation
console.log(myDog.name); // Output: Charlie

// Accessing object properties using bracket notation
console.log(myDog["legs"]); // Output: 4

// Adding a new property to the object
myDog.breed = "Golden Retriever";
console.log(myDog.breed); // Output: Golden Retriever

// Updating an object property
myDog.name = "Max";
console.log(myDog.name); // Output: Max

// Deleting a property from the object
delete myDog.tails;
console.log(myDog.tails); // Output: undefined

// Using objects as a lookup table
function phoneticLookup(val) {
    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago"
    };
    return lookup[val] || "Not Found"; // Returns corresponding value or "Not Found" if key is missing
}

console.log(phoneticLookup("charlie")); // Output: Chicago

// Checking if an object has a specific property
console.log(myDog.hasOwnProperty("legs")); // Output: true
console.log(myDog.hasOwnProperty("tail")); // Output: false

// Object with nested objects
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

// Accessing nested object properties
console.log(myStorage.car.inside["glove box"]); // Output: maps
console.log(myStorage.car.outside.trunk); // Output: jack
