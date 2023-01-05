let name="megha";
let name1='manki';

console.log(name);
console.log(name[1]);

// using template literal
console.log(`${name1} is a nickname of ${name}`);

// methods of string
console.log(name.length); //length of name

console.log(name.indexOf("g")); //show index of 1st H

console.log(name.includes("gh")); //check "gh" in sting or not

console.log(name.substring(1,3));  // it will return sttring from index no.1 upto index no.2

console.log(name.toLowerCase());  //change to lower case

console.log(name.slice(1,4)); //give output from inedx no. 1 to 3

console.log(name.slice(2)); //print whole string strating from index no.2

console.log(name.replace("meg","gem")); //replace meg with gem

console.log(name.concat(" khatri")); //joined after ASHISH

console.log(name.concat(name1)); //name2 will be joined after name1

console.log(name1.concat(" is nick name of " ,name));

let name2 = "     megha     ";

console.log(name2);
console.log(name2.trim()); //this trim will remove all extra space from name3

// use loop for print all string caracter

// foor in
for(let i in name)
{
    console.log(i+ " "+ name[i]);
}
// for loop
for(let i=0; i<name.length; i++){
    console.log(name[i])
}

console.log("-------------------------------")
// for of loop
for(let key of name){
    console.log(key)
}

