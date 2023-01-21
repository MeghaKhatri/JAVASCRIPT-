//--CLASS--

// class add{
//     a=10;
//     b=30;
//     print(){
//         console.log("hiii i'm fron print function from class")
//     }
// }
// let a = new add(); //create obj for class
// console.log(a);
// a.print();  //acess print function from the class



//constructor in class 

// class firstClass{
//     a;
//     b;
//     constructor(val1, val2){
//         this.a=val1;
//         this.b=val2;
//     }
//     aData(){
//         return (this.a+4)
//     }
//     bData(){
//         return (this.b+4)
//     }
//     set setBvalue(val){
//         this.b=val;
//         return this.b
//     }
//     print(){
//         console.log(`thia is value of a= ${this.a} and this is b value = ${this.b}`)
//     }
// }
// let b = new firstClass(5,15);
// console.log(b.aData())
// console.log(b.bData())
// b.setBvalue=77
// console.log(b)
// console.log(b.print())



//--INHERITANCE---

// class fruit{
//     fruit1;
//     fruit2;
//     constructor(val1, val2){
//         this.fruit1=val1;
//         this.fruit2=val2;
//     }
// }
// class vegeis extends fruit{
//     vegei1;
//     vegei2;
//     constructor(val1,val2,vegi1,vegi2){
//         super(val1,val2)
//         this.vegei1=vegi1;
//         this.vegei2=vegi2;

//     }
// }
// let f = new fruit("apple","Orange");
// console.log(f);

// let v = new vegeis("apple","Orange",  "Tomato","Carrot");
// console.log(v);



// argu pass in extended class only and acces also first class variable

// class pencil{
//     pencil1;
//     pencil2;
//     constructor(val1,val2){
//         this.pencil1 = val1;
//         this.pencil2 = val2;
//     }
// }

// class pen extends pencil{
//     pen1;
//     pen2;
//     constructor(val1,val2,  val3,val4){
//         super(val1,val2)
//         this.pen1 = val3;
//         this.pen2 = val4;
//     }

//     print(){
//         console.log(`1st pencil is ${this.pencil1} and 2nd pencil is ${this.pencil2}`)
//         console.log(`1st pen is ${this.pen1} and 2nd pen is ${this.pen2}`)
//     }
// }

// let pens = new pen("red","yellow",  "blue","black");
// console.log(pens.print())