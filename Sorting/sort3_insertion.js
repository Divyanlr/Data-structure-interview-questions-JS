//Insertion Sort
//consider 2nd element as starting point array[1]
//array[j] > curr swapping.
//similar to selection sort, constantly comparing one at a time
function insertionSort(array){
    for (let i=1; i<=array.length; i++) {
        let curr = array[i];
        let j = i-1;
        while(j>=0 && array[j]>curr){
            array[j+1] = array[j]; //8,8,4,6,4,9,3
            j--;
        }
        array[j+1] = curr; //2,8,4,6,4,9,3
    }

}

const result = insertionSort([8,2,4,6,4,9,3]);
console.log(result);


// time complexity O(n2)
//best case O(n)
// if we use almost sorted array , it will be easy to sort using this
// for small problem its ok, but for bigger noooo
// usefull for online data, like data coming and need to sort