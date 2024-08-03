function naiveStringSearch(text, pattern) {
    let textLength = text.length;
    let patternLength = pattern.length;
    let result = [];

    for (let i = 0; i <= textLength - patternLength; i++) {
        let j;
        for (j = 0; j < patternLength; j++) {
            if (text[i + j] !== pattern[j]) {
                break;
            }
        }
        if (j === patternLength) {
            result.push(i);  // Found a match at index i
        }
    }

    return result;
}

// Example usage:
let text = "this is a simple example";
let pattern = "simple";
let positions = naiveStringSearch(text, pattern);
console.log(positions);  // Output: [10]



// time complexity of O(n * m), where n is the length of the text and m is the length of the pattern