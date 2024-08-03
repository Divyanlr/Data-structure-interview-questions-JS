// Set to store a key value pair
// Get to retrieve a value given a key
// Remove to remove key value pair
// Hashing function to convert a string key to a numeric index
// hash functions : k mod 10, k mod n, mid square , folding method -- to find hash value and store to that location
// same memory location more than one value occurrence , collision
// open hashing   - 1. separate chaining - adding upcoming collision values to linear linked list 
// closed hashing - 1. linear probing - adding to next available empty location.
//                  2. h + i2 mod n (h--> hash vale, i--> how many location checked , n --> hash table length)
//                  3. double hash - use 2 hash functions 
// let data = {
//     'name': 'Amala',
//     'age': '24',
//     'gender':'female',
// };
// hash tables are faster compared with array
// data.contact = 9962738393

// for(items in data) {
//     console.log(items);
// }
//insert O(1) very fast
//delete O(1) very fast
//access O(1) very fast
function hashStringToInt(str, tableSize) {
    let hash = 17;
    for (let i = 0; i < str.length; i++) {
        hash = (hash * str.charCodeAt(i)) % tableSize;
    }
    return hash;
}
class HashTable {
    constructor(size = 100) {
        this.table = new Array(size);
    }
    // Set a key-value pair in the hash table
    setItem(key, value) {
        const index = hashStringToInt(key, this.table.length);
        if (!this.table[index]) {
            this.table[index] = [];
        }
        this.table[index].push([key, value]);
    }
    // Get the value associated with a key
    getItem(key) {
        const index = hashStringToInt(key, this.table.length);
        if (!this.table[index]) {
            return undefined;
        }
        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i][0] === key) {
                return this.table[index][i][1];
            }
        }
        return undefined;
    }
    // Get all keys in the hash table
    keys() {
        let keysArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!keysArr.includes(this.keyMap[i][j][0])) { //doest this value array already have this value/ duplicate
                        keysArr.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        return keysArr;
    }
    // Get all values in the hash table
    values() {
        let valuesArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!valuesArr.includes(this.keyMap[i][j][1])) {
                        valuesArr.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        return valuesArr;
    }
}

// Example usage:
const ht = new HashTable();
ht.setItem("hello", "world");
ht.setItem("goodbye", "earth");
ht.setItem("hi", "there");
ht.setItem("hey", "you");
ht.setItem("hash", "table");
ht.setItem("hashing", "function");

console.log(ht.getItem("hello")); // world
console.log(ht.getItem("goodbye")); // earth
console.log(ht.getItem("hi")); // there
console.log(ht.getItem("unknown")); // undefined
