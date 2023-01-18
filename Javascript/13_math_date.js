// Date 
let date =new Date();   // show pre-defined date
console.log(date);

let date1 = new Date(2000,3,18);  //show giveing date
console.log(date1);
console.log(date1.getDate());
console.log(date1.getDay());
console.log(date1.getFullYear());

let date2 = new Date();
console.log(date2.getMinutes());
console.log(date2.getSeconds());
console.log(date2.toUTCString());   //universal time


// Math
console.log(Math.round(5.4))     //show nearest value like 5 
console.log(Math.floor(5.9))    //show smallest value
console.log(Math.ceil(6.3))     //show bigger value always
console.log(Math.trunc(4.934))  //remove digit after point 
console.log(Math.pow(2,2) )       //2 raise to power2- (2*2)
console.log(Math.sqrt(81))    // square root
console.log(Math.abs(-23))     // positive number return 
console.log(Math.random()*10) //return random number