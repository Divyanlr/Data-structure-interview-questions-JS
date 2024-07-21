//devide and conqure
// take the last element as pivot element and 
// add smaller elements than pivot element to left
// add bigger elements than pivot element to right
// merge elements.
//              [-6,20,8,-2,4]
//  left               pivot    right
// -6 -2                 4      8 20
//  left pivot right            left pivot right
//   -6    -2                    8    20
//merge them-- -6,-2,4,8,20

function quickSort(array){
    let pivot = array[array.length - 1];
    let left = [];
    let right = [];

    if(array.length < 2){
        return array;
    }

    for(let i = 0; i < array.length-1; i++){
        if(array[i] < pivot){
            left.push(array[i]);
        }
        else{
            right.push(array[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

const result = quickSort([-6,20,8,-2,4]);
console.log(result);

// run time will depend upon where u pick the pivot element