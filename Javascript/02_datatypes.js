// data type ->[define which type of data is stored] two types of datatypes

// ---PRIMITIVE DATA-TYPES---
// null
let a = null;
// number
let b = 10;
console.log(typeof b);
// string
let c = "Megha Khatri";
console.log(typeof c);
// boolean
let d = true;
console.log(typeof d);
// bigint
let e = BigInt("567");
console.log(typeof e);
// undefined
let f;
console.log(f);


// ---NON-PRIMITIVE DATA-TYPES---
// onject
let obj ={
    name : "Megha",
    age : 22,
    rollno : 20
}
console.log(obj);
console.log(obj['name']);
console.log(typeof obj);
obj.city="Rohtak"; //add city in object
console.log(obj);

// array
let arr=[1,2,"Manki"];
console.log(arr);
console.log(arr[2]);
console.log(typeof arr); //show object
