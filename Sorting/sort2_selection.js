//Selection sort
//taking more time to sort
//start iteration first one will be minimum and start is 0th index, 
//compare with next element if smaller mark to minimum and compare to next element till last,
// swap to minimum and start next iteration  0+1 will be start point.

//opposite of bubble sort , here its arrange to first
function selectionSort(array){
    for(let i=0; i<array.length; i++){
        let min=i;
        for(let j=i+1; j<array.length; j++){
           if(array[j] < array[min]){
            min = j;
           }
        }
        if(i != min){
            temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
    }
    return array;
}
const result = selectionSort([10,4,2,6,8,4,7,6,4,4,3,34,90]);
console.log(result);

// time complexity o(n2)
// best case O(n2)