// 🔹 1. Record Collection Data
let recordCollection = {
    2548: {
        albumTitle: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: ["Let It Rock", "You Give Love a Bad Name"]
    },
    2468: {
        albumTitle: "1999",
        artist: "Prince",
        tracks: ["1999", "Little Red Corvette"]
    },
    1245: {
        artist: "Robert Palmer",
        tracks: []
    },
    5439: {
        albumTitle: "ABBA Gold"
    }
};

// 🔹 2. Function to Update Records
function updateRecords(records, id, prop, value) {
    if (value === "") {
        // If value is empty, delete the property
        delete records[id][prop];
    } else if (prop === "tracks") {
        // If the property is "tracks", add to an array
        records[id][prop] = records[id][prop] || []; // Initialize if undefined
        records[id][prop].push(value);
    } else {
        // Otherwise, update or add the property
        records[id][prop] = value;
    }

    return records;
}

// 🔹 3. Example Test Cases
console.log(updateRecords(recordCollection, 5439, "artist", "ABBA")); 
// Adds "artist": "ABBA" to album 5439

console.log(updateRecords(recordCollection, 2468, "tracks", "Purple Rain")); 
// Adds "Purple Rain" to the tracks of album 2468

console.log(updateRecords(recordCollection, 1245, "albumTitle", "Riptide")); 
// Adds "albumTitle": "Riptide" to album 1245

console.log(updateRecords(recordCollection, 2548, "artist", "")); 
// Removes "artist" from album 2548

console.log(updateRecords(recordCollection, 5439, "tracks", "Dancing Queen")); 
// Adds "Dancing Queen" to the tracks of album 5439
