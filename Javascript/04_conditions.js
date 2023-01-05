// ---CONDITIONAL STATEMENTS---

// IF statement
let a=10;
if(a>5)
{
    console.log("allowed"); 
}
if(a<5)
{
    console.log("not allowed"); 
}


//if-else_condition
let b=19;
if(b>18){
    console.log("overage");
}
else{
    console.log("underage");
}


//if-else-if_condition
let c=5;
if (c<=10){
    console.log("kid"); 
}
else if(c==15){
    console.log("adult");
}
else{
    console.log("young");
}


// SWITCH CASE
let fruit="banana";
switch (fruit) {
    case "apple":
        console.log("apple")
        break;
    case "mango":
        console.log("mango")
        break;
    case "grapes":
        console.log("grapes")
        break;
    case "banana":
        console.log("banana")
        break;
    default:
        break;
}


// ---ternary operator---
let name="megha";
name=="megha"? console.log("my name is megha" ) : console.log("no i'm not megha");