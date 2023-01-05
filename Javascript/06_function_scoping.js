function add(a,b,c=0) //given default value 0 to c
{
    console.log(a+b+c);
}
add(2,3,4);

let a=5;
let b=2;
add(a,b); //pass variable to function

// arrow function
let fun = (x,y) =>{
    console.log(x-y);
}
fun(10,5);

// declare function in variable
let adition = function(a,b){
    let c = a+b;
    console.log(c);
}
adition(10,5);


// return type function 
function sub(a,b){
    return a-b;
}

let subtract = sub(20,2)
console.log(subtract);


// addition of array in function
let arr=[1,2,3,4,5]

function totalofarray(ar=[]){
    let total=0;
    for(let i=0; i<ar.length; i++){
        total +=ar[i]
    }
    return total
}

console.log(totalofarray(arr));