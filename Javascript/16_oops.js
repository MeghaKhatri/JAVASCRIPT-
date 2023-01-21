// PASS BY VALUE:-primitive

// let a = 10;
// let b = a;             //it's pass by value /b is only assign value

// console.log("a :",a);
// console.log("b :",b);
// a=30;                  //update value a bt b value not change

// console.log("a :",a);
// console.log("b :",b);

// PASS BY REFERENCE :-non-primitive
// let b={
//     name:"megha",
//     age: 22
// }
// a store the b adress.if any change done in b also show in a
// let a=b;     
// console.log("b :",b);
// console.log("a :",a);
// a.name="Megha Khatri";
// console.log("b :",b);
// console.log("a :",a);



// ===CREATING OBJECT===
// let obj ={
//     firstName :"megha",
//     lastName : "Khatri",
//     age : 22,
//     blood : "B+"
// }

// console.log(obj);
// console.log(obj.blood);

//creating object-template and also known as factory function
// function info(h,w,b){
//     return{
//         height:h,
//         weidth:w,
//         blood:b
//     }
// }

// console.log(info(5.3,48,"B+"))
// console.log(info(6,50,"B"))

// -OR-
// function info2(h,w,b){
//     let all={
//         height:h,
//         weidth:w,
//         blood:b
//     }
//     return all;
// }

// console.log(info2(5,50,"B-"));
// let a = info2(7,40,"A+")
// console.log(a);
// let b = info2(5.5,49,"AB");
// console.log(b);

//===constructor function===
// function student(s,r){
//     this.section=s;
//     this.room=r
// }
// let i = new student(5,10);
// console.log(i);
// console.log(i.constructor);
// i.name ="megha"
// console.log(i);