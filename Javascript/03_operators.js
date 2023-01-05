// ---OPERATORS IN JAVASCRIPT---

//1. Assignment operators

let a = 5;
let b = 2;
console.log(a+b); // addition
console.log(a-b); // subtraction
console.log(a*b); // multiplication
console.log(a/b); // division
console.log(a%b); // reminder
console.log(a**b); // a raise to power b
console.log(++a); //  increment
console.log(--b); //  decrement



// 2.assignment_operators
let x=1; 
    x=2; //2 is assigned
console.log(x);
x += 5 // 5 is added in x(2)
console.log(x);
x *=2 // x is multiplied by 2
console.log(x);
x -=2  //subtract 2 in x
console.log(x);
// similarly there are /= , %= and **=


// comparison operator
let c1=5;
let c2=4;
console.log(c1==c2);
console.log(c1!=c2);
console.log(c1===c2);
console.log(c1>c2);
console.log(c1<c2);
console.log(c1>=c2);
console.log(c1<=c2);


//4.logical_opertors
let m = 6;
let n = 8;
if(m>6 && n>6) //AND operator
{
    console.log("and opertor"); //both cond. are true  
}
if(m>6 || n>6)
{
    console.log("OR opertor"); //even one cond. is true 
}
