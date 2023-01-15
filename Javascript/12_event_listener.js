let btn = document.getElementById("btn");
let box1 = document.getElementById("b1");
let box2 = document.getElementById("b2");
let box3 = document.getElementById("b3");
let heading = document.querySelector("h1");

//addEventListner
btn.addEventListener("click",()=>{  //here event is added,when user click
    btn.style.background="green";   //button color  changed

    let newbox = document.createElement("div") 
    newbox.setAttribute("class","mydiv");
    newbox.innerHTML='box';
    document.body.append(newbox);

})

box1.addEventListener("mouseover", ()=>{
    box1.style.filter="blur(10px)";
    box1.style.transform="scale(1.3)"
})

box1.addEventListener("mouseout", ()=>{
    box1.style.filter="blur(0px)";
    box1.style.transform=""
})

box2.addEventListener("dblclick",()=>{             //on doblue click box will be blur
    box2.style.filter="grayscale(100)"
})

box3.addEventListener("dblclick",()=>{
    box3.style.position="relative";
    box3.style.left="40px";
})

heading.addEventListener("mousemove",()=>{
    heading.style.filter="blur(1px)"
    heading.style.letterSpacing="5px"
})