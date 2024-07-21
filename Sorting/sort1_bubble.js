// Bubble sort
// A sorting algorithm whre the largest values bubble up at top
// very slow
function bubbleSort(array){

    for(let i=array.length; i>0; i--){
        let isSwaped;
        for (let j=0; j<i-1; j++){
            if(array[j] > array[j+1]){
                [array[j], array[j+1]] = [array[j+1], array[j]];
                //     or u can do    
                // let temp = arr[j - 1];
                // arr[j - 1] = arr[j];
                // arr[j] = temp;
                isSwaped = true;
            }
        }
        if(!isSwaped) break;
    }
    return array;
}

const result = bubbleSort([8,2,3,4,5,6,7,9]);
console.log(result);

// time complexity: o(n2)
//best case o(n)--sorted array