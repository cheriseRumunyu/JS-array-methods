// 🔹 Sample database of contacts (array of objects)
let contacts = [
    {
        firstName: "Alice",
        lastName: "Johnson",
        age: 25,
        city: "New York",
        occupation: "Software Engineer",
    },
    {
        firstName: "Bob",
        lastName: "Smith",
        age: 30,
        city: "Los Angeles",
        occupation: "Graphic Designer", 
    },
    {
        firstName: "Charlie",
        lastName: "Brown",
        age: 28,
        city: "Chicago",
        occupation: "Data Analyst",
    }
];

function lookUpProfile(name, prop) {
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      return contacts[i][prop] || "No such property!!";
    }
  }
  return "No such contact";
}

var data=lookUpProfile("Alice","age");
console.log(data);


// 🔹 Function to look up a profile by first name
function profileLookup(name) {
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName.toLowerCase() === name.toLowerCase()) {
            return `✅ Found Profile:
            Name: ${contacts[i].firstName} ${contacts[i].lastName}
            Age: ${contacts[i].age}
            City: ${contacts[i].city}
            Occupation: ${contacts[i].occupation}`;
        }
    }
    return "❌ Profile not found.";
}


// 🔹 Get user input (use `do...while` to ensure valid input)
let userInput;
do {
    userInput = prompt("Enter a first name to search:");
} while (!userInput || userInput.trim() === ""); // Ensures input is not empty

// 🔹 Call the function and display the result
console.log(profileLookup(userInput));
