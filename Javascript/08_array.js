// declare array with  new keyword
let arr1 = new Array(1,2,3,4,5) 
console.log(arr1);

// other way to diclare array
let arr = [11,22,"megha",false]
console.log(arr)

console.log(arr[1]) //access value by index number

console.log(arr.indexOf("megha")) //tell index number

//concat arr to arr2
console.log(arr.concat(arr1))  

// reverse array
console.log(arr.reverse())

// sort method
let arr2 =[23,45,76,23,78,09,]
console.log(arr2.sort())

// sort in decending order
let arr3=[43,54,23,46,76,45,34,56];
function decending (a,b){
    return b-a
}
arr3.sort(decending);
console.log(arr3)

//splice method : it modify original array while slice creates new array
let arr4=[11,22,33,44,55,66];
console.log(arr4);
arr4.splice(2,3); //it remove three element after index no 2
console.log(arr4)
//  or
let arr6=[12,23,34,45,56]
console.log(arr6);
arr6.splice(0,2,"meg","gha")  //it will replace total two elements from index no.0 
console.log(arr6);

//slice : it do not modify original array , it generates new which needs to be stored somewhere

let arr7=[1,2,3,4,5,6,7,8];
console.log(arr7);
let i = arr7.slice(2) //it will generate new array from index no.3 to end
console.log(i);
// or
let y = arr7.slice(3,7) //it will generate new array from index no.3 to index no.6
console.log(y);

// array to string
let n =[1,2,3,4,5];
let a = n.toString();
console.log(n,a);
console.log(typeof(a));

// join method
let b= n.join("~"); //  ~ be joined between every element
console.log(n,b);

//pop
let c = n.pop();    // pop last element 
console.log(n,c);

//push 
let d = n.push(10); // 10 will be pushed 
console.log(n , "  "+d+"(it is showing length)");

//shift   -> it will take out the first element from n
let e = n.shift();
console.log(n,e);

//unshift -> it will add value in starting of array
let f = n.unshift(200);
console.log(n,"  "+f+"(it is length of array)")



// printing array values with different loops
for(i=0; i<arr7.length; i++){               //for_loop
    console.log(arr7[i] +"for_loop");
}

arr7.forEach(i => {                         //forEach_loop
    console.log(i +"forEach_loop")
});

for (let key in arr7) {                      //forIN_loop  -> (key will print the index no.)
    console.log(key + " " + arr7[key])     
    }

for (let i of arr7) {                      //forOF_loop       
    console.log(i +" forOF")
}

// string convert to array
let string = "hello megha";
let m = Array.from(string);
console.log(m);