// DOM:=(Document object model) =>it mean whole html document behave like a object


// you can see whole html document in console
// console.log(document);


//you can see body part of your html doc. inside the console
// console.log(document.body);

// console.log(document.body.firstChild); //access the first child

//console.log(document.body.firstElementChild); //it will access the first child Element of document i.e(H1 tag)


//console.log(document.body.childNodes); // it will provide all the nodes of body

//console.log(document.getElementById("4th")); //it will acces the element whose id id "4th"

//console.log(document.getElementsByClassName("myDiv")); //it will access all the elements of class "myDiv"

//we can access multiple elements and store in any variable , from that variable we can even access them seperatly

// let a= document.getElementsByClassName("myDiv"); // all the elements with id "myDiv" are stored inside variable a
//   console.log(a[0]);
//   a[1].innerHTML="changed"
//   a[2].style.color="pink";

//console.log(document.getElementsByTagName("div")) //it will access all the elements whose tag is Div

//getAttribute and setAttribute

// let a = document.getElementById("4th");//here we selected element whose id is "4th"

//   console.log( a.getAttribute("class"))  //using getAttribute we can get any Attribute's value of that element

//   console.log( a.getAttribute("id"))     //to see what id is given

//   console.log(a.getAttribute("style"))   
//   a.setAttribute("style","background: gray")//even we can change the value of any attribute by using setAttribute

//let create an tag and write something in it

// let a = document.createElement("h2");
//   a.innerHTML="hello_JS";    //instead og innerHTMl you can also used innertext , textContent also
//   document.body.append(a);  //append add the element in last of body

// let a = document.createElement("h2");
  // a.innerText="hello_JS";    
  // a.style.background="pink"
  // document.body.prepend(a);  //prepend add the element in stating og body

//   let h3 = document.createElement("h3");
//   let tn = document.createTextNode("this content is created in JS");
//   h3.append(tn);
//   document.body.append(h3);

//querrySelector : lets change the color of elemnts using querrySelector
  
// let a = document.querySelectorAll(".myDiv");    //it select all element with className myDiv
  // a[0].style.background="pink"
  // a[1].style.background="lightgreen"
  // a[2].style.background="orange"


  let a = document.querySelector("#last");          //selected button with querry selector and done some changes
  a.innerHTML="changed with help of querySelector"
  a.style.color="white";
  a.style.background="green";
  a.style.width="500px"
  a.style.padding="10px"
  a.style.margin="auto"