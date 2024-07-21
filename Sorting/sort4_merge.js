//devide and conqure
//it's a combination of Merging and sorting
//decomposing an array onto smaller arrays of 0 or 1 elements then building up new sorted array

//eg:
//          [8 ,3 ,5, 4 ,7, 6, 1 ,2]
//         [8, 3, 5 ,4]    [7, 6, 1, 2]
//         [8,3]  [5,4]      [7,6] [1,2]
//       [8] [3]  [5] [4]  [7] [6] [1] [2]
//        [3,8]    [4,5]    [6,7]    [1,2]
//           [3,4,5,8]         [1,2,6,7]
//                [1,2,3,4,5,6,7,8] 

// Merge function to combine two sorted arrays into one sorted array
//time complexity n(log n)
//good for large data
function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare the elements of the two arrays and merge them in sorted order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Concat the remaining elements (if any) of the left and right arrays
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Merge sort function
function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middleIndex = Math.floor(array.length / 2);
    const leftArray = array.slice(0, middleIndex);
    const rightArray = array.slice(middleIndex);

    return merge(mergeSort(leftArray), mergeSort(rightArray));
}

// Example usage
const unsortedArray = [34, 7, 23, 32, 5, 62];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray); // Output: [5, 7, 23, 32, 34, 62]

