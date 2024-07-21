// Determining the maximum number of digits in any number in the array.
// Iterating from the least significant digit to the most significant digit.
// Grouping the numbers into buckets based on the current digit.
// Concatenating the buckets back into a single list.

// Helper function to get the digit at a specific place
function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}
// Helper function to get the number of digits in a number
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}
// Helper function to get the maximum number of digits in an array of numbers
function mostDigits(nums) {
    var maxDigits = 0;
    for (var i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}
// Radix Sort function
function radixSort(nums) {
    var maxDigitCount = mostDigits(nums);
    for (var k = 0; k < maxDigitCount; k++) {
        // Create 10 empty arrays for the digit buckets
        var digitBuckets = [];
        for (var i = 0; i < 10; i++) {
            digitBuckets[i] = [];
        }
        for (var i = 0; i < nums.length; i++) {
            var digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [];
        for (var i = 0; i < 10; i++) {
            nums = nums.concat(digitBuckets[i]);
            //can use spread also [].conact(...digitBuckets)
        }
    }
    return nums;
}
// Example usage
var unsortedArray = [170, 45, 75, 90, 802, 24, 2, 66];
var sortedArray = radixSort(unsortedArray);
console.log(sortedArray); // Output: [2, 24, 45, 66, 75, 90, 170, 802]

// 170, 45, 75, 90, 802, 24, 2, 66

// Buckets:
// 0 -> [170, 90]
// 1 -> []
// 2 -> [802, 2]
// 3 -> []
// 4 -> [24]
// 5 -> [45, 75]
// 6 -> [66]
// 7 -> []
// 8 -> []
// 9 -> []

// Concatenated: [170, 90, 802, 2, 24, 45, 75, 66]
// 170, 90, 802, 2, 24, 45, 75, 66

// Buckets:
// 0 -> [802, 2]
// 1 -> []
// 2 -> []
// 3 -> []
// 4 -> []
// 5 -> [45]
// 6 -> [66]
// 7 -> [170, 75]
// 8 -> []
// 9 -> [90, 24]

// Concatenated: [802, 2, 45, 66, 170, 75, 90, 24]

// 802, 2, 45, 66, 170, 75, 90, 24

// Buckets:
// 0 -> [2, 45, 66, 75, 90, 24]
// 1 -> [170]
// 2 -> []
// 3 -> []
// 4 -> []
// 5 -> []
// 6 -> []
// 7 -> []
// 8 -> [802]
// 9 -> []

// Concatenated: [2, 24, 45, 66, 75, 90, 170, 802]
