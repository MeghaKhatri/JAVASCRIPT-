// MAP : -look like foreach loop but diffrence is  map create new array
// foreach is uesd to print or operation on array

let arr=[1,2,3,4,5,6,7,8,9];
console.log(arr);

// create a new array and stored in x
let x = arr.map((value)=>{     
    return value + "1";
});
console.log(x ," (using map)");

// foreach can't create new array ,y is undefined 
let y = arr.forEach(value => { 
    {                            
        return value+1;
    }  
});
console.log(y," (using foreach)");

//Filter method  : used to filter an array
let z=arr.filter((value)=>{   
    return value>5            //values greater then 5 will be stored
})
console.log(z);

//reduce method :reducde the array in single value
let a = arr.reduce((value)=>{
    return value ;
})
console.log(a);

// add and give total or array
let b = arr.reduce((value1,value2)=>{       
    return value1+value2 ;
})              
console.log(b);  