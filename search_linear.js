//[2,4,3,6,8,9]

function linearSearch(array,key){
    for(i=0; i<array.length; i++){
        if(array[i] === key){
            return i
        }
    }
    return -1;
}

const result = linearSearch([2,4,3,6,8,9], 3);
console.log(result);