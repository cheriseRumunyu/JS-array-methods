// 1. Defining an Object with Nested Properties
let myStorage = {
    car: {
        inside: {
            "glove box": "maps",
            seat: "crumbs"
        },
        outside: {
            trunk: "jack"
        }
    }
};

// 2. Accessing Object Properties
console.log(myStorage.car.outside.trunk); // Output: jack
console.log(myStorage["car"]["inside"]["glove box"]); // Output: maps

// 3. Adding Properties to an Object
myStorage.car.inside["dashboard"] = "sunglasses";
console.log(myStorage.car.inside["dashboard"]); // Output: sunglasses

// 4. Updating Properties
myStorage.car.outside.trunk = "spare tire";
console.log(myStorage.car.outside.trunk); // Output: spare tire

// 5. Deleting Properties
delete myStorage.car.inside.seat;
console.log(myStorage.car.inside.seat); // Output: undefined

// 6. Checking if a Property Exists
console.log("trunk" in myStorage.car.outside); // Output: true
console.log(myStorage.car.inside.hasOwnProperty("glove box")); // Output: true
console.log(myStorage.car.outside.hasOwnProperty("mirror")); // Output: false

// 7. Looping Through Object Properties
for (let key in myStorage.car.inside) {
    console.log(`${key}: ${myStorage.car.inside[key]}`);
}

// 8. Working with Deeply Nested Objects
let company = {
    name: "TechCorp",
    departments: {
        HR: {
            employees: { 
                manager: "Alice",
                staff: ["Bob", "Charlie"]
            }
        },
        IT: {
            employees: {
                manager: "David",
                staff: ["Eve", "Frank"]
            }
        }
    }
};

// Accessing Nested Object Properties
console.log(company.departments.HR.employees.manager); // Output: Alice
console.log(company.departments.IT.employees.staff[1]); // Output: Frank

// 9. Function to Retrieve Nested Properties Dynamically
function getNestedValue(obj, path) {
    return path.split('.').reduce((acc, key) => acc && acc[key], obj);
}

// ["departments", "IT".....]'


console.log(getNestedValue(company, "departments.IT.employees.manager")); // Output: David
console.log(getNestedValue(company, "departments.Sales.employees.manager")); // Output: undefined

// 10. Converting Objects to Arrays
let carParts = {
    engine: "V8",
    wheels: 4,
    color: "red"
};

console.log(Object.keys(carParts)); // Output: ["engine", "wheels", "color"]
console.log(Object.values(carParts)); // Output: ["V8", 4, "red"]
console.log(Object.entries(carParts)); // Output: [["engine", "V8"], ["wheels", 4], ["color", "red"]]

// 11. Merging Objects
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };

let merged1 = Object.assign({}, obj1, obj2);
console.log(merged1); // Output: { a: 1, b: 2, c: 3, d: 4 }

let merged2 = { ...obj1, ...obj2 };
console.log(merged2); // Output: { a: 1, b: 2, c: 3, d: 4 }
