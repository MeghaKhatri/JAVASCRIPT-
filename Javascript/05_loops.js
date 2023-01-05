// ---loops types---

//1.for loop
for(let a = 0; a<=5; a++)
{
    console.log(a);
}

console.log('---------------------------')

// 2.while loop
let b=5;
while (b<10) {
    console.log(b);
    b++;
}

console.log('---------------------------')

// 3.do-while loop
let c = 10;
do{
    console.log(c);
    c++;
}while(c<15)

console.log('---------------------------')

// ------------for in loop---------
// print array
let arr = [1,2,3,4,5]
for(let i in arr){
    console.log(i +" : "+ arr[i])
}

// print object 
let obj ={
    name : 'megha',
    age : 22,
    city : 'rohtak'
}
for(let key in obj){
    console.log(key +' : '+obj[key])
}


// --------for of loop-------
// print array
let arr2=[1,2,3,4,5]
for(let x of arr2)
{
    console.log(x);
}

// print object
let string = "megha khatri"
for(let y of string){
    console.log(y);
}

// -------for each loop------

let fruit = ["mango","banana","orange","kivi"];
fruit.forEach(key => console.log(key));

// OR

fruit.forEach(keys);
function keys(z){
    console.log(z);
}

