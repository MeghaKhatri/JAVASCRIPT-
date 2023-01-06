let main = document.getElementById("main");
let num = document.querySelector("#inp")

function genword(n){
    let word="";
    let alpa = "abcdefghijklmnopqrstuvwxyz";
    for(let i=0; i<n;i++){
        word +=alpa[(Math.random()*25).toFixed(0)];
    }
    console.log(word);
    return word;
    
}


function genpara (){

    let data = " ";
    for(let i=0; i<num.value; i++){
        data += genword((Math.random()*15).toFixed(0));
        data += " ";
    }

let para = document.createElement("p");
para.setAttribute("class", "para");
para.innerHTML= data;
main.append(para)
}