const users =[  
                {name: 'jon' , email: 'jon@gmail.com'},
                {name: 'maya' , email: 'maya@gmail.com'},
                {name: 'seetha' , email: 'seetha@gmail.com'},
                {name: 'janu' , email: 'janu@gmail.com'},
                {name: 'manu' , email: 'manu@gmail.com'}
            ]


function linearSearch(array, key){
    for(let items of array){
        if(items['name'] === key){
            return true;
        }
    } 
    return false;
}

const result = linearSearch(users, 'manu');
console.log(result);



