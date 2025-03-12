// JavaScript Map and WeakMap Examples

// Create a Map
const map1 = new Map();
console.log(map1); // Map {}

// Insert key-value pairs into Map
map1.set('info', { name: 'Jack', age: 26 });
console.log(map1); // Map {"info" => {name: "Jack", age: 26}}

// Map with an object as a key
let map2 = new Map();
let obj = {};
map2.set(obj, { name: 'Jack', age: "26" });
console.log(map2); // Map {{} => {name: "Jack", age: "26"}}

// Access Map elements
console.log(map1.get('info')); // {name: "Jack", age: "26"}

// Check if a key exists in Map
console.log(map1.has('info')); // true

// Remove elements from Map
map1.delete('address'); // false (key not found)
console.log(map1); // Map {"info" => {name: "Jack", age: "26"}}
map1.delete('info'); // true
console.log(map1); // Map {}

// Clear all elements in Map
map1.set('info', { name: 'Jack', age: "26" });
map1.clear();
console.log(map1); // Map {}

// Get size of a Map
map1.set('info', { name: 'Jack', age: "26" });
console.log(map1.size); // 1

// Iterate through a Map using for...of
map1.set('name', 'Jack');
map1.set('age', '27');
for (let [key, value] of map1) {
    console.log(`${key} - ${value}`);
}

// Iterate using forEach
map1.forEach((value, key) => {
    console.log(`${key} - ${value}`);
});

// Iterate over Map keys
for (let key of map1.keys()) {
    console.log(key);
}

// Iterate over Map values
for (let value of map1.values()) {
    console.log(value);
}

// Get key/value pairs of Map
for (let [key, value] of map1.entries()) {
    console.log(`${key}: ${value}`);
}

// JavaScript WeakMap Example
const weakMap = new WeakMap();
console.log(weakMap); // WeakMap {}

let weakObj = {};
weakMap.set(weakObj, 'hello');
console.log(weakMap.get(weakObj)); // hello

// Check if key exists in WeakMap
console.log(weakMap.has(weakObj)); // true

// Delete element from WeakMap
console.log(weakMap.delete(weakObj)); // true
console.log(weakMap); // WeakMap {}

// WeakMap does NOT support iteration (throws an error)
try {
    for (let i of weakMap) {
        console.log(i);
    }
} catch (error) {
    console.log("WeakMaps are not iterable!"); // TypeError
}
