// devide and conquer algo
// sorted array
// find the index of given number in a sorted array 7
// [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]  o/p--> index 6 

// min=0 , max =array.length-1 , midIndex= (min+max)/2 
// if midIndex > num --> max= midIndexindex -1
// if midIndex < num --> min= midIndexindex+1
// if midIndex === num o/p


function binarySearch(array, num)
{
    let min = 0;
    let max = array.length - 1;

    while(min <= max)
    {
        let midIndex = Math.floor((min+max)/2);
        
        if(num > array[midIndex])
        {
            min = midIndex+1;
        }
        else if(num < array[midIndex])
        {
            max = midIndex-1;
        }
        else{
            return midIndex;
        }
    }
    return -1;

}

const result = binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],7);
console.log(result);

// time complexity binary O(log(n))
// when we double the elements in the array actually steps are increasing by one ie, log2(n)